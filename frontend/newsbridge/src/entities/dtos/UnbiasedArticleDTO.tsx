export interface UnbiasedArticle {
  unbiased_article_id: number; // Primary key, auto-incremented
  title: string; // Title of the unbiased article
  summary: string; // Summary of the unbiased article
  content: string; // Full content of the unbiased article
  image?: number | null; // Foreign key referencing images(image_id)
  topic?: string | null; // Optional topic of the unbiased article
  like_count: number; // Number of likes
  genre?: string | null; // Optional genre of the unbiased article
  created_at: string; // Timestamp of when the unbiased article was created
}