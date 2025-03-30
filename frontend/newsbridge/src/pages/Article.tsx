import React from "react";
import { useState, useEffect } from "react";
import { NewsBridgeBiasScale, UserBiasScale } from "../components/BiasScale";
import { mockArticle } from "../mock-data/MockArticle";
import { UnbiasedArticleViewModel } from "../entities/viewmodels/UnbiasedArticleVM";
import CommentSection from "../components/Article/CommentSection/CommentSection";
import { mockComments } from "../mock-data/MockComments";
import { mockSources } from "../mock-data/MockSources";
import Sources from "../components/Article/Partials/Sources";
import Bookmark from "../components/Article/Partials/Bookmark";
import ShareButton from "../components/Article/Partials/ShareButton";
import LikeButton from "../components/Article/Partials/LikeButton";


const ArticlePage: React.FC = () => {

    const [hasLiked, setHasLiked] = useState(false);
    const handleLike = () => {
        if (hasLiked) {
          // TODO: Database call to add/remove a "like" DTO
          // TODO: Database call to increment/decrement the article like count
          setHasLiked(false);
        } else {
          setHasLiked(true);
        }
      };

    const [article, setArticle] = useState<UnbiasedArticleViewModel | null>(null);
    useEffect(() => {
        // TODO: Will be replaced with a call to the backend to get the article
        setArticle(mockArticle);
    }, []);

    const handleBiasUpdate = (rating: number) => {
        // TODO: Will be replaced with a call to the backend
        // TODO: Will update the bias rating involving the current user + article, as well as the article's net bias rating
        console.log(rating);
    };

    if(!article) return <div>Loading...</div>;
    return (
        <div className="my-3 flex flex-col items-center justify-center p-6 bg-white min-h-screen mx-auto overflow-hidden max-w-4xl">
            {/* Title */}
            <div className="flex w-full">
                <h1 className="text-5xl">{article.title}</h1>
            </div>

            {/* Header Meta Data*/}
            <div className="flex w-full justify-between items-center">
                {/* Publication Date */}
                <h1 className="text-2xl text-secondary font-light">{new Date(article.createdAt).toDateString()}</h1>
                <div className="flex items-center gap-2">
                    {/* Sources */}
                    <Sources sources={mockSources} />
                    {/* Like */}
                    <LikeButton onClick={handleLike} hasLiked={hasLiked} />
                    {/* Bookmark */}
                    <Bookmark size="text-3xl" />
                    {/* Share */}
                    {/* TODO: Actually implement a share link */}
                    <ShareButton onClick={() => console.log("Shared!")} />
                </div>
            </div>

            {/* Image */}
            <div className="my-5 border border-gray-300 rounded-lg h-100 w-full flex justify-center items-center">
                <img 
                    src="https://via.placeholder.com/800x400" 
                    alt="Article" 
                    className="max-w-full max-h-full object-contain" 
                />
            </div>

            {/* Article Summary */}
            <div className="my-5 w-full">
                <h2 className="text-xl font-semibold">Summary</h2>
                <pre className="whitespace-pre-wrap font-sans italic">
                    {article.summary}
                </pre>
            </div>

            <hr className="my-5 border-gray-300 border-1 w-full" />

            {/* Full Article */}
            <div className="my-5 w-full">
                <h2 className="text-xl font-semibold">Full Article</h2>
                <pre className="whitespace-pre-wrap font-sans">
                    {article.content}
                </pre>
            </div>

            <hr className="my-5 border-gray-300 border-1 w-full" />

            {/* Bias Ratings */}
            <div className="my-5 w-full flex justify-between space-x-20">
                {/* Audience Rating */}
                <div className="w-full">
                    <h3 className="text-lg font-medium pb-3 text-center">Audience Bias Rating</h3>
                    <NewsBridgeBiasScale rating={article.audienceBiasRating} />
                </div>
                {/* User Rating */}
                <div className="w-full">
                    <h3 className="text-lg font-medium pb-3 text-center">Your Bias Rating</h3>
                    <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
                </div>
            </div>

            {/* Comments Section */}
            <div className="my-5 w-full">
                <h2 className="text-xl font-semibold">Comments</h2>
                <CommentSection comments={mockComments} />
            </div>
        </div>
    );
};

export default ArticlePage;