import { UnbiasedArticle } from "../dtos/UnbiasedArticleDTO";
import { ArticleViewModel } from "./ArticleVM";

export interface UnbiasedArticleViewModel {
  id: number;
  title: string;
  sources: ArticleViewModel[] | null; //TODO: Remove acceptance of null as an option here
  summary: string;
  content: string;
  imageUrl?: string | null;
  topic?: string | null;
  likeCount: number;
  genre?: string | null;
  createdAt: string;
  audienceBiasRating: number;
}

export const mapUnbiasedArticleToViewModel = (article: UnbiasedArticle): UnbiasedArticleViewModel => ({
  id: article.unbiased_article_id,
  title: article.title,
  sources: null, //TODO: Get the sources using a database call
  summary: article.summary,
  content: article.content,
  imageUrl: article.image ? `/images/${article.image}` : null,
  topic: article.topic,
  likeCount: article.like_count,
  genre: article.genre,
  createdAt: article.created_at,
  audienceBiasRating: article.audienceBiasRating,
});
