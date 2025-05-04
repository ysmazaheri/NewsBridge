from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from typing import List, Optional, Dict, Any
from newspaper import Article
import re
import requests
import os

app = FastAPI(title="Web-Scraping Service")

# URL of the Top-Articles Service (override via env if needed)
TOP_ARTICLES_URL = os.getenv("TOP_ARTICLES_URL", "http://localhost:8000")


# Metadata schema coming straight from Top-Articles Service
class ArticleMeta(BaseModel):
    headline: Optional[str]
    url:      HttpUrl
    topic:    Optional[str]
    source:   Optional[str]


# Enriched schema (meta + fetched content)
class ArticleEnriched(ArticleMeta):
    title:     Optional[str]
    content:   Optional[str]
    author:    Optional[str]
    published: Optional[str]
    error:     Optional[str]


def clean_text(text: str) -> str:
    # remove bylines
    text = re.sub(r'(?m)^By[\s\w\.,-]+\n', '', text)
    # remove image captions
    text = re.sub(r'\[.*?\]\n', '', text)
    # collapse blank lines
    text = re.sub(r'\n\s*\n', '\n\n', text)
    return text.strip()


def fetch_url_data(url: str) -> Dict[str, Any]:
    try:
        article = Article(url)
        article.download()
        article.parse()
        return {
            "title":     article.title,
            "content":   clean_text(article.text),
            "author":    ', '.join(article.authors) or None,
            "published": article.publish_date.isoformat() if article.publish_date else None,
            "error":     None
        }
    except Exception as e:
        return {
            "title":     None,
            "content":   None,
            "author":    None,
            "published": None,
            "error":     str(e)
        }


@app.post(
    "/fetch-content",
    response_model=Dict[str, List[ArticleEnriched]]
)
def fetch_content(grouped: Dict[str, List[Dict[str, Any]]]):
    """
    Accepts grouped metadata:
      { "left": [{headline,url,topic,source},…],
        "right":[…] }
    Returns same grouping with each entry enriched.
    """
    enriched: Dict[str, List[Dict[str, Any]]] = {}
    for label, metas in grouped.items():
        entries = []
        for meta in metas:
            url = meta.get("url")
            data = fetch_url_data(str(url))
            merged = {**meta, **data}
            entries.append(merged)
        enriched[label] = entries
    return enriched


@app.get(
    "/enrich-top-articles",
    response_model=Dict[str, List[ArticleEnriched]]
)
def enrich_top_articles():
    """
    1) Fetches grouped metadata from Top-Articles Service
    2) Passes it to fetch_content() for enrichment
    """
    try:
        resp = requests.get(f"{TOP_ARTICLES_URL}/top-articles", timeout=10)
        resp.raise_for_status()
        grouped = resp.json()
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Failed to fetch from Top-Articles: {e}")

    return fetch_content(grouped)
