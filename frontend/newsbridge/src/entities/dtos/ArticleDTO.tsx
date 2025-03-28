export interface Article {
  article_id: number; // Primary key, auto-incremented
  source_id: number; // Foreign key referencing news_sources(source_id)
  title: string; // Title of the article
  summary?: string | null; // Optional summary of the article
  content: string; // Full content of the article
  url: string; // URL of the article
  image_url?: string | null; // Optional URL for the article's image
  published_at: string; // Publication date in ISO string format
  topic?: string | null; // Optional topic of the article
  created_at: string; // Timestamp of when the article was created
}
