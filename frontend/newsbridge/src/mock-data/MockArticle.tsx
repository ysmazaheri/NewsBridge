import { UnbiasedArticle } from "../entities/dtos/UnbiasedArticleDTO";


export const mockArticle: UnbiasedArticle = {
    unbiased_article_id: 1,
    title: "Sample Article Title",
    summary: "This is a brief summary of the article. It provides an overview of the main points discussed.",
    content: "This is the full content of the article. It goes into detail about the topic and provides all the necessary information.",
    image: null,
    topic: "Sample Topic",
    like_count: 23,
    genre: "Sample Genre",
    created_at: "2025-03-18T00:00:00.000Z"
    //Todo: Add audience bias rating
}