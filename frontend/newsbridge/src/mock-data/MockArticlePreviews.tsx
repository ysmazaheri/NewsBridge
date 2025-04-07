import { UnbiasedArticlePreviewViewModel } from "../entities/viewmodels/UnbiasedArticlePreviewVM";
import { mockArticles } from "./MockArticles";

export const mockArticlePreviews: UnbiasedArticlePreviewViewModel[] =
  mockArticles.map((article) => ({
    id: article.id,
    title: article.title,
    summary: article.summary,
    imageUrl: article.imageUrl,
    topic: article.topic,
    likeCount: article.likeCount,
    commentCount: article.comments.length,
    genre: article.genre,
    createdAt: article.createdAt,
    daysAgo: (() => {
      const createdDate = new Date(article.createdAt);
      const now = new Date();
      const diffTime = now.getTime() - createdDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays === 0 ? "Today" : `${diffDays} days ago`;
    })(),
    isBookmarked: article.isBookmarked,
    isLiked: article.isLiked,
    audienceBiasRating: article.audienceBiasRating,
  }));
