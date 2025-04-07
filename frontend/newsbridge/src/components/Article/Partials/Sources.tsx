import React, { useState } from "react";
import { ArticleViewModel } from "../../../entities/viewmodels/ArticleVM";

interface SourcesProps {
  articles: ArticleViewModel[]; // Updated to take ArticleViewModel objects
}

const Sources: React.FC<SourcesProps> = ({ articles }: SourcesProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Only show the first 3 sources, and the rest will be in the dropdown
  const maxVisibleSources = 3;
  const remainingSources = articles.length - maxVisibleSources;

  return (
    <div className="relative">
      {/* Preview of sources including + {however many sources remain} */}
      <span
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <p className="text-gray-400 hidden sm:block">Sources:</p>
        <span className="flex -space-x-1.5">
          {articles.slice(0, maxVisibleSources).map((article, index) => (
            <span
              key={index}
              className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2"
            >
              {/* Display the first letter of the associated NewsSourceViewModel's name */}
              <span className="text-xs text-white font-bold">
                {article.source?.name[0] || "?"}
              </span>
            </span>
          ))}
          {remainingSources > 0 && (
            <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2">
              <span className="text-xs text-white font-bold">
                +{remainingSources}
              </span>
            </span>
          )}
        </span>
      </span>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-lg p-3 w-48 z-10">
          <h3 className="text-md font-semibold border-b pb-2">Sources</h3>
          <ul className="mt-2">
            {articles.map((article, index) => (
              <li
                key={index}
                className="flex items-center gap-2 py-2 border-b last:border-none"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full text-xs font-bold">
                  {/* Display the first letter of the associated NewsSourceViewModel's name */}
                  {article.source?.name[0] || "?"}
                </span>
                <a
                  href={article.url} // Link to the ArticleViewModel's URL
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-500 hover:underline overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px]"
                >
                  {article.source?.name || "Unknown Source"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sources;
