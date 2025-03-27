import { UserBiasRating } from "../dtos/UserBiasRatingDTO";

export interface CommentViewModel {
  id: number;
  userId: number;
  unbiasedArticleId: number;
  rating: number;
  createdAt: string;
}

export const mapCommentToViewModel = (rating: UserBiasRating): CommentViewModel => ({
  id: rating.user_bias_rating_id,
  userId: rating.user_id,
  unbiasedArticleId: rating.unbiased_article_id,
  rating: rating.rating,
  createdAt: rating.created_at,
});
