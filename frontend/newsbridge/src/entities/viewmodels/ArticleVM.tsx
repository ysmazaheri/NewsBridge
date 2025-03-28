import { Article } from "../dtos/ArticleDTO";

export interface ArticleViewModel {
  id: number;
  sourceId: number;
  title: string;
  summary?: string | null;
  content: string;
  url: string;
  imageUrl?: string | null;
  publishedAt: string;
  topic?: string | null;
  createdAt: string;
}

export const mapArticleToViewModel = (article: Article): ArticleViewModel => ({
  id: article.article_id,
  sourceId: article.source_id,
  title: article.title,
  summary: article.summary,
  content: article.content,
  url: article.url,
  imageUrl: article.image_url,
  publishedAt: article.published_at,
  topic: article.topic,
  createdAt: article.created_at,
});
