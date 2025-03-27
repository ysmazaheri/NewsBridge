import React from "react";
import { FaBookmark } from "react-icons/fa";

const ArticlePage: React.FC = () => {
    return (
        <div className="my-3 flex flex-col items-center justify-center p-6 bg-white min-h-screen mx-auto overflow-hidden w-200">
            {/* Title */}
            <div className="flex w-full">
                <h1 className="text-5xl">Sample Article Title</h1>
            </div>

            {/* Publication Date, Sources, and Bookmark */}
            <div className="flex w-full justify-between items-center">
                {/* Publication Date */}
                <h1 className="text-2xl text-secondary font-light">Month DD, YYYY</h1>
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
                    This is a brief summary of the article. It provides an overview of the main points discussed.
                </p>
            </div>

            {/* Full Article */}
            <div className="my-5 w-full">
                <h2 className="text-xl font-semibold">Full Article</h2>
                <p>
                    This is the full content of the article. It goes into detail about the topic and provides all the necessary information.
                </p>
            </div>

            {/* Bias Ratings */}
            <div className="my-5 w-full flex justify-between">
                <div>
                    <h3 className="text-lg font-medium">Audience Bias Rating</h3>
                    <p>Neutral</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Your Bias Rating</h3>
                    <p>Neutral</p>
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