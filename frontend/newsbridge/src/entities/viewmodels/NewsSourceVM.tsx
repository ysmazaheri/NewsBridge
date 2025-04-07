import { NewsSource } from "../dtos/NewsSourceDTO";

export interface NewsSourceViewModel {
  id: number;
  name: string;
  url: string;
  country?: string | null;
}

export const mapNewsSourceToViewModel = (
  source: NewsSource
): NewsSourceViewModel => ({
  id: source.source_id,
  name: source.name,
  url: source.url,
  country: source.country,
});
