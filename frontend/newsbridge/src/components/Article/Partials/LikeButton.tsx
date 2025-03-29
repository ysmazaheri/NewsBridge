import React from "react";

interface LikeButtonProps {
  hasLiked: boolean;
  onClick?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ hasLiked, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded-xl transition-colors active:scale-95"
    >
      <img
        src={hasLiked ? "/likeactiveicon.svg" : "/likeicon.svg"}
        alt="Like Icon"
        className="w-5 h-5"
      />
      <span
        className={`text-sm ${hasLiked ? "text-[#484EE7]" : "text-gray-400"}`}
      >
        Like
      </span>
    </button>
  );
};

export default LikeButton;
