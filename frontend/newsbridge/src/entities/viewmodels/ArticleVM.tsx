import { Article } from "../dtos/ArticleDTO";
import { NewsSourceViewModel } from "./NewsSourceVM";

export interface ArticleViewModel {
  id: number;
  source: NewsSourceViewModel | null; //TODO: Remove acceptance of null as an option here;
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
  source: null, //TODO: Get the user using a database call
  title: article.title,
  summary: article.summary,
  content: article.content,
  url: article.url,
  imageUrl: article.image_url,
  publishedAt: article.published_at,
  topic: article.topic,
  createdAt: article.created_at,
});
