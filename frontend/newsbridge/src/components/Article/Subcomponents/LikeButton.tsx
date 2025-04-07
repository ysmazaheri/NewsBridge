import React from "react";
import { useUserInteractions } from "../../../context/UserInteractionContext";
interface LikeButtonProps {
  articleId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ articleId }) => {
  const { likedArticles, toggleLike } = useUserInteractions();
  const hasLiked = likedArticles.has(articleId);
  return (
    <button
      onClick={() => {
        toggleLike(articleId);
      }}
      className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-xl transition-colors active:scale-95"
    >
      <img
        src={hasLiked ? "/likeactiveicon.svg" : "/likeicon.svg"}
        alt="Like Icon"
        className="w-5 h-5"
      />
      <span
        className={`text-sm ${
          hasLiked ? "text-[#484EE7]" : "text-gray-400"
        } hidden sm:inline`}
      >
        Like
      </span>
    </button>
  );
};

export default LikeButton;
