import React, { useState } from "react";

interface Source {
    name: string;
    url: string;
}

interface SourcesProps {
    sources: Source[];
}

const Sources: React.FC<SourcesProps> = ({ sources }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //Only show first 3, and the rest will be in dropdown
    //Have + {remaining sources} if more than 3
    const maxVisibleSources = 3;
    const remainingSources = sources.length - maxVisibleSources;

    return (
        <div className="relative">
            {/* Preview of sources including + {however many sources remain} */}
            <span className="flex items-center gap-1 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Sources:
                <span className="flex -space-x-1.5">
                    {sources.slice(0, maxVisibleSources).map((source, index) => (
                        <span 
                            key={index} 
                            className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2"
                        >
                                <span className="text-xs text-white font-bold">{source.name[0]}</span>
                        </span>
                    ))}
                    {remainingSources > 0 && (
                        <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2">
                                <span className="text-xs text-white font-bold">+{remainingSources}</span>
                                </span>
                    )}
                </span>
            </span>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-lg p-3 w-48 z-10">
                    <h3 className="text-md font-semibold border-b pb-2">Sources</h3>
                    <ul className="mt-2">
                        {sources.map((source, index) => (
                            <li key={index} className="flex items-center gap-2 py-2 border-b last:border-none">
                                    <span className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full text-xs font-bold">
                                        {source.name[0]}
                                    </span>
                                <a 
                                    href={source.url} 
                                    target="_blank" 
                                    rel="noreferrer noopener"
                                    className="text-blue-500 hover:underline overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px]"
                                >
                                    {source.name}
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
