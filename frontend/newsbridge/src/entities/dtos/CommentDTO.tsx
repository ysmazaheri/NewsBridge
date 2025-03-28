export interface Comment {
  comment_id: number; // Primary key, auto-incremented
  user_id: number; // Foreign key referencing users(user_id)
  unbiased_article_id: number; // Foreign key referencing unbiased_articles(unbiased_article_id)
  content: string; // The content of the comment
  parent_comment_id?: number | null; // Optional foreign key referencing comments(comment_id) for nested comments
  created_at: string; // Timestamp of when the comment was created
}