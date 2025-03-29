import React, { useState } from "react";
import Bookmark from "../Bookmark";
import { NewsBridgeBiasScale } from "../BiasScale";
import LikeButton from "./Partials/LikeButton";
import ShareButton from "./Partials/ShareButton";
import { UnbiasedArticlePreviewViewModel } from "../../entities/viewmodels/UnbiasedArticlePreviewVM";
import { useNavigate } from "react-router-dom";
const ArticlePreview: React.FC<UnbiasedArticlePreviewViewModel> = ({
  title,
  summary,
  imageUrl,
  likeCount: initialLikeCount,
  biasRating,
  daysAgo,
  isBookmarked,
  commentCount,
  id,
}) => {
  const [currentLikes, setCurrentLikes] = useState(initialLikeCount);
  const [hasLiked, setHasLiked] = useState(false);
  const Navigate = useNavigate();
  const handleLike = () => {
    if (hasLiked) {
      setCurrentLikes(currentLikes - 1);
      setHasLiked(false);
    } else {
      setCurrentLikes(currentLikes + 1);
      setHasLiked(true);
    }
  };
  const handleClick = () => {
    Navigate(`/article/${id}`);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl font-sans">      {/* Article Image */}
      {imageUrl ? (
        <img
          className="w-full h-64 object-cover rounded-t-xl border border-black"
          src={imageUrl}
          alt="Article image"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 rounded-t-xl border border-black flex items-center justify-center">
          No image available
        </div>
      )}

      <div className="bg-tertiary rounded-b-xl p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-base mb-3 line-clamp-2">
          <span className="font-bold">Summary:</span> {summary}
        </p>

        {/* Line */}
        <hr className="border-gray-300 mb-3" />

        <div className="flex items-center text-sm text-gray-600">
          {/* Likes */}
          <div className="w-1/3">
            <span>{currentLikes} likes</span>
          </div>

          {/* Bias Level */}
          <div className="w-1/3 flex items-center justify-center gap-2">
            <span className="text-sm">Bias Level:</span>
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: "120px", height: "24px" }}
            >
              <NewsBridgeBiasScale rating={biasRating} />
            </div>
          </div>

          {/* Days Ago & Bookmark */}
          <div className="w-1/3 flex justify-end items-center gap-10">
            <span className="text-gray-400">{daysAgo}</span>
            <Bookmark />
          </div>
        </div>

        {/* Line */}
        <hr className="border-gray-300 mt-2" />

        <div className="flex items-center text-sm text-gray-600 mt-2">
          {/* Like Button */}
          <div className="w-1/3">
            <LikeButton onClick={handleLike} hasLiked={hasLiked} />
          </div>
          {/* Comment Count */}
          <div className="w-1/3 text-center">
            <span className="text-gray-400">{commentCount} comments</span>
          </div>
          {/* Share Button */}
          <div className="w-1/3 flex justify-end">
            <ShareButton onClick={() => console.log("Shared!")} />
          </div>
        </div>
        <div className="items-center justify-center text-center mt-4">
        <button className="text-blue-600 hover:underline cursor-pointer"
          onClick={handleClick}
          >
            View Article
          </button>
      </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
