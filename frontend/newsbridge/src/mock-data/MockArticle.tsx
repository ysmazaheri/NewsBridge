import { UnbiasedArticleViewModel } from "../entities/viewmodels/UnbiasedArticleVM"

export const mockArticle: UnbiasedArticleViewModel = {
    id: 1,
    title: "Sample Article Title",
    summary: "This is a brief summary of the article. It provides an overview of the main points discussed.",
    content: "This is the full content of the article. It goes into detail about the topic and provides all the necessary information.",
    imageUrl: null,
    topic: "Sample Topic",
    likeCount: 23,
    genre: "Sample Genre",
    createdAt: "2025-03-18T00:00:00.000Z",
    sources: null,
    audienceBiasRating: 47,
    //Todo: Add audience bias rating
}