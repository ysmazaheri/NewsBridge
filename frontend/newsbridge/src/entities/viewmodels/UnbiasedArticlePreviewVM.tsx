import { UnbiasedArticle } from "../dtos/UnbiasedArticleDTO";

export interface UnbiasedArticlePreviewViewModel {
  id: number;
  title: string;
  summary: string;
  imageUrl?: string | null;
  topic?: string | null;
  likeCount: number;
  commentCount: number;
  genre?: string | null;
  createdAt: string;
  daysAgo: string;
  isBookmarked: boolean;
  isLiked: boolean;
  audienceBiasRating: number;
}

const computeDaysAgo = (createdAt: string): string => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffTime = now.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays === 0 ? "Today" : `${diffDays} days ago`;
};

export const mapUnbiasedArticlePreviewToViewModel = (
  article: UnbiasedArticle
): UnbiasedArticlePreviewViewModel => ({
  id: article.unbiased_article_id,
  title: article.title,
  summary: article.summary,
  imageUrl: article.image ? `/images/${article.image}` : null,
  topic: article.topic,
  likeCount: article.like_count,
  genre: article.genre,
  createdAt: article.created_at,
  daysAgo: computeDaysAgo(article.created_at),
  isBookmarked: false, //TODO: Determine this using a database call
  isLiked: false, //TODO: Determine this using a database call
  audienceBiasRating: article.audience_bias_rating,
  commentCount: article.comment_count,
});
