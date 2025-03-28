import { useState } from "react";
import { TextArea } from "../../components/FormElements";
import CommentDisplay from "./CommentDisplay";
import { CommentViewModel } from "../../entities/viewmodels/CommentVM";

interface CommentSectionProps {
  comments: CommentViewModel[];
}

function CommentSection({ comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleButtonClickComment = (value: string) => {
    if (value.trim()) {
      setComments([
        ...comments,
        // TODO: Replace with actual user data from authentication context or state management
        {
          id: comments.length + 1,
          user: {
            id: 1,
            fullName: "Current User",
            email: "currentuser@example.com",
            profilePicUrl: "/person.svg",
            role: "user",
            createdAt: new Date().toISOString(),
          },
          content: value,
          createdAt: new Date().toISOString(),
        },
      ]);
      setText("");
      // TODO: Add new comment to database
    }
  };

  return (
    <div className="flex flex-col gap-4 my-2 w-full">
      {/* Scrollable Comments Section */}
      <div className="max-h-64 overflow-y-auto space-y-4 border-2 border-tertiary rounded-2xl px-3 py-3">
        {comments.map((comment) => (
          <CommentDisplay
            key={comment.id}
            username={comment.user?.fullName || "Anonymous"}
            userComment={comment.content}
            userImage={comment.user?.profilePicUrl || "/person.svg"}
          />
        ))}
      </div>
      {/* Input Area for Adding Comments */}
      <TextArea
        className="w-full"
        defaultValue="Type your comment here..."
        value={text}
        onChange={handleInputChange}
        bgColor="bg-white"
        cornerRadius="rounded-md"
        showSubmitIcon={true}
        onIconSubmit={handleButtonClickComment}
        width="100%"
        style={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      />
    </div>
  );
}

export default CommentSection;