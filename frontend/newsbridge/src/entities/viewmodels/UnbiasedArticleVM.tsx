import { UnbiasedArticle } from "../dtos/UnbiasedArticleDTO";
import { ArticleViewModel } from "./ArticleVM";
import { CommentViewModel } from "./CommentVM";

export interface UnbiasedArticleViewModel {
  id: number;
  title: string;
  sources: ArticleViewModel[];
  comments: CommentViewModel[];
  summary: string;
  content: string;
  imageUrl?: string | null;
  topic?: string | null;
  likeCount: number;
  genre?: string | null;
  createdAt: string;
  isBookmarked: boolean;
  isLiked: boolean;
  userBiasRating: number | null;
  audienceBiasRating: number;
}

export const mapUnbiasedArticleToViewModel = (
  article: UnbiasedArticle
): UnbiasedArticleViewModel => ({
  id: article.unbiased_article_id,
  title: article.title,
  sources: [], //TODO: Get the sources using a database call
  comments: [], //TODO: Get the comments using a database call
  summary: article.summary,
  content: article.content,
  imageUrl: article.image ? `/images/${article.image}` : null,
  topic: article.topic,
  likeCount: article.like_count,
  genre: article.genre,
  createdAt: article.created_at,
  isBookmarked: false, //TODO: Determine this using a database call
  isLiked: false, //TODO: Determine this using a database call
  userBiasRating: null, //TODO: Determine this using a database call
  audienceBiasRating: article.audience_bias_rating,
});
