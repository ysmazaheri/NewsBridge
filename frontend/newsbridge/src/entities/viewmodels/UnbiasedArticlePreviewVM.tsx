import { UnbiasedArticle } from "../dtos/UnbiasedArticleDTO";

export interface UnbiasedArticleViewModel {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string | null;
  topic?: string | null;
  likeCount: number;
  genre?: string | null;
  createdAt: string;
}

export const mapUnbiasedArticleToViewModel = (article: UnbiasedArticle): UnbiasedArticleViewModel => ({
  id: article.unbiased_article_id,
  title: article.title,
  summary: article.summary,
  content: article.content,
  imageUrl: article.image ? `/images/${article.image}` : null,
  topic: article.topic,
  likeCount: article.like_count,
  genre: article.genre,
  createdAt: article.created_at,
});
