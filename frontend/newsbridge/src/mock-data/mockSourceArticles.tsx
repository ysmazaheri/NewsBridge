import { mockSources } from "./MockSources";
import { ArticleViewModel } from "../entities/viewmodels/ArticleVM";

export const mockSourceArticles: ArticleViewModel[][] = [
  [
    {
      id: 1,
      source: mockSources[0], // BBC News
      title: "Breaking News from BBC",
      summary: "This is a summary of the breaking news from BBC.",
      content: "This is the full content of the breaking news from BBC.",
      url: "https://www.bbc.com/article/1",
      imageUrl: "https://www.bbc.com/image1.jpg",
      publishedAt: "2025-03-26T12:00:00Z",
      topic: "World",
      createdAt: "2025-03-25T10:00:00Z",
    },
    {
      id: 2,
      source: mockSources[1], // CNN
      title: "Latest Updates from CNN",
      summary: "This is a summary of the latest updates from CNN.",
      content: "This is the full content of the latest updates from CNN.",
      url: "https://www.cnn.com/article/2",
      imageUrl: "https://www.cnn.com/image2.jpg",
      publishedAt: "2025-03-26T14:00:00Z",
      topic: "Politics",
      createdAt: "2025-03-25T11:00:00Z",
    },
  ],
  [
    {
      id: 3,
      source: mockSources[2], // Fox News
      title: "Fox News Headlines",
      summary: "This is a summary of the headlines from Fox News.",
      content: "This is the full content of the headlines from Fox News.",
      url: "https://www.foxnews.com/article/3",
      imageUrl: "https://www.foxnews.com/image3.jpg",
      publishedAt: "2025-03-26T16:00:00Z",
      topic: "Economy",
      createdAt: "2025-03-25T12:00:00Z",
    },
    {
      id: 4,
      source: mockSources[3], // MSNBC
      title: "MSNBC Special Report",
      summary: "This is a summary of the special report from MSNBC.",
      content: "This is the full content of the special report from MSNBC.",
      url: "https://www.msnbc.com/article/4",
      imageUrl: "https://www.msnbc.com/image4.jpg",
      publishedAt: "2025-03-26T18:00:00Z",
      topic: "Health",
      createdAt: "2025-03-25T13:00:00Z",
    },
  ],
  [
    {
      id: 5,
      source: mockSources[4], // The New York Times
      title: "The New York Times Exclusive",
      summary:
        "This is a summary of the exclusive report from The New York Times.",
      content:
        "This is the full content of the exclusive report from The New York Times.",
      url: "https://www.nytimes.com/article/5",
      imageUrl: "https://www.nytimes.com/image5.jpg",
      publishedAt: "2025-03-26T20:00:00Z",
      topic: "Technology",
      createdAt: "2025-03-25T14:00:00Z",
    },
    {
      id: 6,
      source: mockSources[5], // Reuters
      title: "Global Markets Update",
      summary: "A summary of the latest trends in global markets.",
      content: "Detailed content about global market trends.",
      url: "https://www.reuters.com/article/6",
      imageUrl: "https://www.reuters.com/image6.jpg",
      publishedAt: "2025-03-27T10:00:00Z",
      topic: "Economy",
      createdAt: "2025-03-26T10:00:00Z",
    },
  ],
];
