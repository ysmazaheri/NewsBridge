import React, { useState } from "react";
import Bookmark from "../Bookmark";
import { NewsBridgeBiasScale } from "../BiasScale";
import LikeButton from "./Partials/LikeButton";
import ShareButton from "./Partials/ShareButton";

interface ArticlePreviewProps {
  title: string;
  summary: string;
  likes: number;
  biasRating: number;
  daysAgo: string;
  isBookmarked: boolean;
  commentCount: number;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  summary,
  likes,
  biasRating,
  daysAgo,
  commentCount,
}) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl font-sans">
      {/* Image */}
      <img
        className="w-full h-64 object-cover rounded-t-xl border border-black"
        src="https://via.placeholder.com/600x200"
        alt="Article image placeholder"
      />

      <div className="bg-tertiary rounded-b-xl px-4 py-3">
        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-base mb-3 line-clamp-2">
          <span className="font-bold">Summary:</span> {summary}
        </p>

        {/* Divider */}
        <hr className="border-gray-300 mb-3" />

        {/* Footer row: Likes, Bias level, Days ago and Bookmark */}
        <div className="flex items-center text-sm text-gray-600">
          {/* Likes */}
          <div className="w-1/3">
            <span>{likeCount} likes</span>
          </div>
          {/* Bias level */}
          <div className="w-1/3 flex items-center justify-center gap-2">
            <span className="text-xs">Bias Level:</span>
            <NewsBridgeBiasScale rating={biasRating} />
          </div>
          {/* Days ago and Bookmark */}
          <div className="w-1/3 flex justify-end items-center gap-4">
            <span className="text-gray-400">{daysAgo}</span>
            <Bookmark />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mt-2" />

        {/* Like, Comments, and Share Buttons */}
        <div className="flex items-center text-sm text-gray-600 mt-2">
          {/* Like Button on the left */}
          <div className="w-1/3">
            <LikeButton onClick={handleLike} />
          </div>
          {/* Number of Comments centered */}
          <div className="w-1/3 text-center">
            <span className="text-gray-400">{commentCount} comments</span>
          </div>
          {/* Share Button on the right */}
          <div className="w-1/3 flex justify-end">
            <ShareButton onClick={() => console.log("Shared!")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
