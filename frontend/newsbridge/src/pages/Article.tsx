import React from "react";
import { FaBookmark } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NewsBridgeBiasScale, UserBiasScale } from "../components/BiasScale";
import { mockArticle } from "../mock-data/MockArticle";
import { UnbiasedArticleViewModel } from "../entities/viewmodels/UnbiasedArticleVM";
const ArticlePage: React.FC = () => {

    const [article, setArticle] = useState<UnbiasedArticleViewModel | null>(null);

    useEffect(() => {
        //Will be replaced with a call to the backend to get the article
        setArticle(mockArticle);
    }, []);

    const handleBiasUpdate = (rating: number) => {
        console.log(rating);
    };
    if(!article) return <div>Loading...</div>;
    return (
        <div className="my-3 flex flex-col items-center justify-center p-6 bg-white min-h-screen mx-auto overflow-hidden w-200">
            {/* Title */}
            <div className="flex w-full">
                <h1 className="text-5xl">{article.title}</h1>
            </div>

            {/* Publication Date, Sources, and Bookmark */}
            <div className="flex w-full justify-between items-center">
                {/* Publication Date */}
                <h1 className="text-2xl text-secondary font-light">{new Date(article.createdAt).toDateString()}</h1>
                <div className="flex items-center gap-8">
                    {/* Sources */}
                    <span className="flex items-center gap-1">
                        Sources:
                        <span className="flex -space-x-1">
                            <span className="w-4 h-4 bg-primary rounded-full"></span>
                            <span className="w-4 h-4 bg-secondary rounded-full"></span>
                            <span className="w-4 h-4 bg-tertiary rounded-full"></span>
                        </span>
                    </span>
                    {/* Bookmark */}
                    <FaBookmark className="cursor-pointer text-secondary text-2xl" />
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
                <p>
                    {article.summary}
                </p>
            </div>

            <hr className="my-5 border-gray-300 border-1 w-full" />

            {/* Full Article */}
            <div className="my-5 w-full">
                <h2 className="text-xl font-semibold">Full Article</h2>
                <p>
                    {article.content}
                </p>
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
                <p>No comments yet. Be the first to comment!</p>
            </div>
        </div>
    );
};

export default ArticlePage;