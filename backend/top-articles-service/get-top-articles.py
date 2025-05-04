from fastapi import FastAPI
from typing import Dict, List
import requests
from dotenv import load_dotenv
import os
load_dotenv()
app = FastAPI()
newsApiKey = os.getenv("newsApiKey")

'''
This service fetches top articles from various news sources using NewsAPI
It then returns the articles grouped by their political leaning (either left or right)
'''


#News sources for the left (liberal)
leftSources = [
    "axios", "bbc-news", "bloomberg", "business-insider", "buzzfeed", "cnn",
    "cbs-news", "nbc-news", "the-washington-post", "time", "vice-news",
]

#News sources for the right (conservative)
rightSources = [
   "breitbart-news", "fox-news", "national-review", "the-american-conservative", "the-washington-times",
   "fox-sports"
]

topN = 5

newsApiUrl = "https://newsapi.org/v2/top-headlines"


#Uses NewsAPI to fetch articles from a specific source
def fetch_articles_by_source(source):
    all_articles = []
    params = {
        "apiKey": newsApiKey,
        "sources": source,
        "pageSize": topN,
    }
    res = requests.get(newsApiUrl, params=params)
    if res.status_code == 200:
        data = res.json()
        for article in data.get('articles', []):
            structured_article = {
                "headline": article.get('title'),
                "url": article.get('url'),
                "topic": article.get('description'),
                "source": source,
            }
            all_articles.append(structured_article)
    else:
        print(f"Error fetching articles from source {source}: {res.status_code}")
    
    return all_articles

#Group articles into left and right based on their sources
def group_articles_by_source(articles):
    leftArticles = []
    rightArticles = []
    
    for article in articles:
        if article["source"] in leftSources:
            leftArticles.append(article)
        elif article["source"] in rightSources:
            rightArticles.append(article)
        else:
            print(f"Unknown source: {article['source']}")

    return {
        "left": leftArticles,
        "right": rightArticles,
    }

#Go through all hardcoded sources and fetch articles for each of them
def get_articles_by_source():
    all_articles = []
    sources = leftSources + rightSources 
    for source in sources:
        print(f"\nFetching articles from source: {source}")
        articles_by_source = fetch_articles_by_source(source)
        all_articles.extend(articles_by_source)
        grouped_articles = group_articles_by_source(all_articles)
    return grouped_articles

@app.get("/top-articles")
def get_top_articles():
    articles = get_articles_by_source()
    return articles    