import { useState } from 'react';

interface CommentDisplayProps {
  username: string;
  userComment: string;
  userImage: string;
}

const CommentDisplay = ({ username, userComment, userImage }: CommentDisplayProps) => {
  const [expanded, setExpanded] = useState(false);
  const THRESHOLD = 200; 
  const isLongComment = userComment.length > THRESHOLD;

  return (
    <div className="flex items-start bg-secondary p-4 rounded-2xl border border-secondary w-fit max-w-full">
      <img
        src={userImage}
        alt="User Image"
        className="w-10 h-10 rounded-full object-cover mr-3"
      />
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-gray-800 mb-1">{username}</h4>
        
        <div
          className={`text-sm text-gray-600 leading-normal transition-all duration-300
            ${expanded ? 'max-h-none' : 'overflow-hidden max-h-[4.5rem]'}`}
          style={{ wordBreak: 'break-word' }}
        >
          {userComment}
        </div>
        
        {isLongComment && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-sm text-blue-600 underline cursor-pointer"
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentDisplay;
