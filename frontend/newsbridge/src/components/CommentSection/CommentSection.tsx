import { useState } from "react";
import { TextArea } from "../../components/FormElements";
import CommentDisplay from "./CommentDisplay";

function CommentSection() {
  const [comments, setComments] = useState([
    { username: "User1", userComment: "This is the first comment.", userImage: "/person.svg" },
    { username: "User2", userComment: "This is another comment.", userImage: "/person.svg" },
  ]);
  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleButtonClickComment = (value: string) => {
    if (value.trim()) {
      setComments([
        ...comments,
        { username: "CurrentUser", userComment: value, userImage: "/person.svg" },
      ]);
      setText("");
    }
  };

  return (
    <div className="flex flex-col gap-4 my-2 w-full">
      {/* Scrollable Comments Section */}
      <div className="max-h-64 overflow-y-auto space-y-4 border-2 border-tertiary rounded-2xl px-3 py-3">
        {comments.map((comment, index) => (
          <CommentDisplay
            key={index}
            username={comment.username}
            userComment={comment.userComment}
            userImage={comment.userImage}
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