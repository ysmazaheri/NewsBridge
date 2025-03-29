import React from "react";

interface ShareButtonProps {
  onClick?: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded rounded-xl transition-colors active:scale-95"
    >
      <img src="/shareicon.svg" alt="Share Icon" className="w-5 h-5" />
      <span className="text-sm text-gray-400">Share</span>
    </button>
  );
};

export default ShareButton;
