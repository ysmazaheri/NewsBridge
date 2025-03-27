export interface NewsSource {
  source_id: number; // Primary key, auto-incremented
  name: string; // Name of the news source
  url: string; // URL of the news source
  country?: string | null; // Country of the news source
}