import React from "react";
import Bookmark from "../Bookmark";

const ArticlePreview: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl font-sans">
      {/* Image */}
      <img
        className="w-full h-64 object-cover rounded-t-xl border border-black"
        src="https://via.placeholder.com/600x200"
        alt="Article image placeholder"
      />

      <div className="bg-tertiary rounded-b-xl p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-primary mb-2">
          Article 1 Title
        </h3>

        {/* Summary */}
        <p className="text-sm mb-3 line-clamp-2">
          <span className="font-bold">Summary:</span> This is a summary. This is
          a summary. This is a summary. This is a summary. This is a summary.
          This is a summary. This is a summary. This is a summary.
        </p>

        <div className="flex items-center text-xs text-gray-600">
          {/* Likes */}
          <div className="w-1/3">
            <span>5 likes</span>
          </div>
          {/* Bias level */}
          <div className="w-1/3 text-center">
            <span>Bias Level: 50</span>
          </div>
          {/* Days ago and bookmark */}
          <div className="w-1/3 flex justify-end items-center gap-10">
            <span className="text-gray-400">3 days ago</span>
            <Bookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
