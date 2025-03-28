export interface Like {
  like_id: number; // Primary key, auto-incremented
  user_id: number; // Foreign key referencing users(user_id)
  unbiased_article_id: number; // Foreign key referencing unbiased_articles(unbiased_article_id)
  created_at: string; // Timestamp of when the like was created
}