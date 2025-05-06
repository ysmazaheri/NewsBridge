from fastapi import FastAPI
from typing import List, Dict
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import requests

app = FastAPI()

TOP_ARTICLES_SERVICE_URL = "http://top-articles-service:8000/top-articles"

# Fetch articles from the top-articles-service
def fetch_articles() -> List[Dict]:
    response = requests.get(TOP_ARTICLES_SERVICE_URL)
    if response.status_code == 200:
        data = response.json()
        return data.get("left", []) + data.get("right", [])
    else:
        print(f"Error fetching articles: {response.status_code}")
        return []

# Evaluate similarity between articles
def evaluate_similarity(articles: List[Dict]) -> List[List[float]]:
    # Extract article descriptions for similarity comparison
    descriptions = [article["topic"] or "" for article in articles]

    # Compute TF-IDF vectors for the descriptions
    vectorizer = TfidfVectorizer(stop_words="english")
    tfidf_matrix = vectorizer.fit_transform(descriptions)

    # Compute cosine similarity between all pairs of articles
    return cosine_similarity(tfidf_matrix)

# Group articles based on similarity
def group_articles(articles: List[Dict], similarity_threshold: float = 0.2) -> List[List[Dict]]:
    if not articles:
        return []

    # Compute similarity matrix
    similarity_matrix = evaluate_similarity(articles)

    # Group articles based on similarity
    grouped_articles = []
    visited = set()

    for i, article in enumerate(articles):
        if i in visited:
            continue

        group = [article]
        visited.add(i)

        for j in range(i + 1, len(articles)):
            if j not in visited and similarity_matrix[i, j] >= similarity_threshold:
                group.append(articles[j])
                visited.add(j)

        if len(group) > 1:  # Only consider groups with 2+ articles
            grouped_articles.append(group)

    return grouped_articles

@app.get("/grouped-articles")
def get_grouped_articles():
    articles = fetch_articles()
    grouped_articles = group_articles(articles)
    return {"grouped_articles": grouped_articles}