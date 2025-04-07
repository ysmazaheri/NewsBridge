import { NewsSourceViewModel } from "../entities/viewmodels/NewsSourceVM";

export const mockSources: NewsSourceViewModel[] = [
  { id: 1, name: "BBC News", url: "https://www.bbc.com" },
  { id: 2, name: "CNN", url: "https://www.cnn.com" },
  { id: 3, name: "Fox News", url: "https://www.foxnews.com" },
  { id: 4, name: "MSNBC", url: "https://www.msnbc.com" },
  {
    id: 5,
    name: "The New York Times With A longer name",
    url: "https://www.nytimes.com",
  },
  { id: 6, name: "Reuters", url: "https://www.reuters.com" },
  { id: 7, name: "The Guardian", url: "https://www.theguardian.com" },
  { id: 8, name: "Al Jazeera", url: "https://www.aljazeera.com" },
  { id: 9, name: "NPR", url: "https://www.npr.org" },
  { id: 10, name: "Bloomberg", url: "https://www.bloomberg.com" },
];
