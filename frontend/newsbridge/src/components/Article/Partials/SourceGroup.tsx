import React from "react";

interface Source {
  image: string;
  name: string;
}

interface SourceGroupProps {
  sources: Source[];
  maxVisible?: number;
}

const SourceGroup: React.FC<SourceGroupProps> = ({
  sources,
  maxVisible = 3,
}) => {
  const visibleSources = sources.slice(0, maxVisible);
  const remaining = sources.length - maxVisible;

  return (
    <span className="flex items-center gap-1 text-sm">
      With
      <span className="flex -space-x-1">
        {visibleSources.map((source, index) => (
          <img
            key={index}
            src={source.image}
            alt={source.name}
            className="w-4 h-4 rounded-full border-2 border-white"
          />
        ))}
        {remaining > 0 && (
          <span className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300 border-2 border-white text-xs text-gray-700">
            +{remaining}
          </span>
        )}
      </span>
    </span>
  );
};

export default SourceGroup;
