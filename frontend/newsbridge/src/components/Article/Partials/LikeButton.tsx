import React from "react";

interface LikeButtonProps {
  onClick?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded rounded-xl transition-colors"
    >
      <img src="/likeicon.svg" alt="Like Icon" className="w-5 h-5" />
      <span className="text-sm text-gray-400">Like</span>
    </button>
  );
};

export default LikeButton;
