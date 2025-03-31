import { useState } from "react";
import { TextArea } from "../../../components/FormElements";
import CommentDisplay from "./CommentDisplay";
import { CommentViewModel } from "../../../entities/viewmodels/CommentVM";
import { useUserInteractions } from "../../../context/UserInteractionContext";
interface CommentSectionProps {
  articleId: number
  comments: CommentViewModel[];
}

function CommentSection({ articleId, comments: initialComments }: CommentSectionProps) {
  const { userComments, addComment } = useUserInteractions();
  const [text, setText] = useState("");

  const allComments = initialComments.concat(userComments[articleId] || []);



  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleButtonClickComment = (value: string) => {
    if (value.trim()) {
      const newComment: CommentViewModel = {
        id: allComments.length + 1,
        user: {
          id: 9,
          firstName: "Current",
          lastName: "User",
          fullName: "Current User",
          email: "currentuser@example.com",
          profilePicUrl: "/person.svg",
          role: "user",
          createdAt: new Date().toISOString(),
        },
        content: value,
        createdAt: new Date().toISOString(),
      }      
      addComment(articleId, newComment);
      setText("");
      // TODO: Add new comment to database
      // TODO: Update comment count in the unbaised article DB entry (used in preview)
    }
  };

  return (
    <div className="flex flex-col gap-4 my-2 w-full">
      {/* Scrollable Comments Section */}
      <div className="max-h-64 overflow-y-auto space-y-4 border-2 border-tertiary rounded-2xl px-3 py-3">
        {allComments.map((comment) => (
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