export interface ArticleMapping {
  mapping_id: number; // Primary key, auto-incremented
  unbiased_article_id: number; // Foreign key referencing unbiased_articles(unbiased_article_id)
  article_id: number; // Foreign key referencing articles(article_id)
}
