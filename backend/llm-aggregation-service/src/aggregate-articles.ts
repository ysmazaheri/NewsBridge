import { GoogleGenAI, Type } from "@google/genai";
import dontenv from "dotenv";
import express from "express";
import { pino } from "pino";
import { Request, Response } from "express";

dontenv.config();
const PORT = process.env.PORT || 8003;
const WEB_SCRAPING_SERVICE_URL =
  "http://enrich-article-service:8002/enrich-top-articles";

async function queryGemini(jsonInput: string): Promise<string> {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      required: [
        "combinedArticle",
        "summary",
        "sources",
        "biasRating",
        "title",
      ],
      properties: {
        combinedArticle: {
          type: Type.STRING,
        },
        summary: {
          type: Type.STRING,
        },
        sources: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          },
        },
        biasRating: {
          type: Type.NUMBER,
        },
        title: {
          type: Type.STRING,
        },
      },
    },
    systemInstruction: [
      {
        text: `You are a helpful assistant. Based on the following JSON input, generate a balanced, neutral article, avoiding opinionated language. Give a bias rating from 0 to 1 for the generated article, where 0 is left, 1 is right. No duplicate sources. The generated article should be around the same length as the source articles.`,
      },
    ],
  };
  const model = "gemini-2.5-flash-preview-04-17";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${jsonInput}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  if (response.text) {
    return response.text;
  } else {
    throw new Error("No text found in response");
  }
}

const log = pino({ transport: { target: "pino-pretty" } });

const app = express();
app.use(express.json());

// Endpoint to handle LLM aggregation of an individual article grouping. Useful for testing
// Request body should be an array of objects with the following fields:
// leaning, headline, url, topic, source, title, content, author, published, error
// (Based on the output of the web scraping service)
app.post("/llm-aggregation", async (req: Request, res: Response) => {
  log.info({ body: req.body }, "Received request to /llm-aggregation endpoint");

  try {
    const body = req.body;
    const requiredFields = [
      'leaning', 'headline', 'url', 'topic', 'source', 
      'title', 'content', 'author', 'published', 'error'
    ];

    if (!Array.isArray(body)) {
      return res.status(400).json({
        error: "Request body must be an array of objects",
      });
    }

    // Check each object in the array for the required fields
    const missingFields: {
      index: number;
      missingFields: string[];
    }[] = [];
    body.forEach((item, index) => {
      const itemMissingFields = requiredFields.filter(
        (field) => !(field in item)
      );
      if (itemMissingFields.length > 0) {
        missingFields.push({
          index,
          missingFields: itemMissingFields,
        });
      }
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "Missing required fields in one or more objects",
        details: missingFields,
      });
    }
    const jsonInput = JSON.stringify(body);
    log.info("Sending request to Gemini API");
    const geminiResponse = JSON.parse(await queryGemini(jsonInput));
    const response = {
      geminiResponse: geminiResponse,
      timestamp: new Date().toISOString(),
    };

    res.json(response);
  } catch (error) {
    return res.status(400).json({
      error: "Invalid JSON format in request body",
    });
  }
});

// Endpoint to generate aggregated articles from the web scraping service, resulting in top articles of the day
app.get("/aggregate-top-articles", async (req: Request, res: Response) => {
  log.info("Received request to /aggregate-top-articles endpoint");

  try {
    const scrapedResponse = await fetch(WEB_SCRAPING_SERVICE_URL, {
      method: "GET",
    });
    const scrapedData = await scrapedResponse.json();

    log.info(
      { body: scrapedData },
      "Received response from web scraping service"
    );
    const output: { [key: string]: { aggregated: any; original: any } } = {};
    for (const [key, article] of Object.entries(scrapedData)) {
      const jsonInput = JSON.stringify(article);
      log.info({ group: key }, "Sending request to Gemini API");
      const geminiResponse = JSON.parse(await queryGemini(jsonInput));
      output[key] = { aggregated: geminiResponse, original: article };
    }
    log.info("Finished processing articles");

    // Final response to api-gateway
    const response = {
      from: "llm-aggregation-service",
      output: output,
      timestamp: new Date().toISOString(),
    };

    res.json(response);
  } catch (err) {
    log.error(`Error calling web scraping service: ${(err as Error).message}`);
    res.status(500).send("Error forwarding to web scraping service");
  }
});

app.listen(PORT, () => {
  log.info(`LLM Aggregation service listening on port ${PORT}`);
});
