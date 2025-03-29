import React from "react";

interface SourceItemProps {
  image: string;
  name: string;
}

const SourceItem: React.FC<SourceItemProps> = ({ image, name }) => (
  <div className="flex items-center space-x-2">
    <img src={image} alt={name} className="w-6 h-6 rounded-full" />
    <span className="text-blue-600 text-sm">{name}</span>
  </div>
);

export default SourceItem;
