export interface UserBiasRating {
  user_bias_rating_id: number; // Primary key, auto-incremented
  user_id: number; // Foreign key referencing users(user_id)
  unbiased_article_id: number; // Foreign key referencing unbiased_articles(unbiased_article_id)
  rating: number; // Bias rating, scale from -1 (left) to 1 (right)
  created_at: string; // Timestamp of when the rating was created
}