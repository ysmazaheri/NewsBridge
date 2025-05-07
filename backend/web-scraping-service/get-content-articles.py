from fastapi import FastAPI, HTTPException
from newspaper import Article
import re, requests, os

app = FastAPI()
TOP_GROUPED_ARTICLES_URL = os.getenv("TOP_GROUPED_ARTICLES_URL", "http://group-articles-service:8001/grouped-articles")

# clean text (remove by lines, image captions, collapse blank lines)
def clean_text(text):
    text = re.sub(r'(?m)^By[\s\w\.,-]+\n', '', text)
    text = re.sub(r'\[.*?\]\n', '', text)
    text = re.sub(r'\n\s*\n', '\n\n', text)
    return text.strip()

# fetch data content from url
def fetch_url_data(url):
    try:
        article = Article(url)
        article.download()
        article.parse()
        return {
            "title": article.title,
            "content": clean_text(article.text),
            "author": ', '.join(article.authors) or None,
            "published": article.publish_date.isoformat() if article.publish_date else None,
            "error": None
        }
    except Exception as e:
        return {
            "title": None,
            "content": None,
            "author": None,
            "published": None,
            "error": str(e)
        }

# iterate to fetch content for all urls
def fetch_content(grouped):
    enriched = {}
    for label, metas in grouped.items():
        entries = []
        for meta in metas:
            url = meta.get("url")
            data = fetch_url_data(str(url))
            entries.append({**meta, **data})
        enriched[label] = entries
    return enriched


@app.get("/enrich-top-articles")
# enrich top articles
def enrich_top_articles():
    try:
        resp = requests.get(TOP_GROUPED_ARTICLES_URL, timeout=10)
        resp.raise_for_status()
        payload = resp.json()
        groups = payload.get("grouped_articles", [])
        grouped = {f"group_{i}": metas for i, metas in enumerate(groups)}
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Failed to fetch from Grouped-Articles: {e}")

    return fetch_content(grouped)
