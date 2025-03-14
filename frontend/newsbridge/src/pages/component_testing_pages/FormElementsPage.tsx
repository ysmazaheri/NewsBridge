import { useState } from "react";
import { Button, TextField } from "../../components/FormElements";
import CommentDisplay from "../../components/CommentDisplay";

function FormElementsPage() {
  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex flex-col p-4 justify-between gap-5">
      {/* Testing for Cancel Button */}
      <Button
        value="Cancel"
        textColor="text-primary"
        bgColor="bg-tertiary"
        borderColor="border-tertiary"
        handleClick={handleButtonClick}
      />
      {/* Testing for Enter Button */}
      <Button
        value="Enter"
        boldness="font-bold"
        handleClick={handleButtonClick}
      />
      {/* Testing for Profile Save Changes */}
      <Button
        value="Save Changes"
        width={160}
        cornerRadius="rounded-full"
        boldness="font-bold"
        height="h-12"
        handleClick={handleButtonClick}
      />
      {/* Testing for Nav Bar */}
      <Button
        value="Trending"
        textColor="text-black"
        width={160}
        bgColor="bg-white"
        borderColor="border-white"
        img="/trending.svg"
        height="h-16"
        handleClick={handleButtonClick}
      />
      {/* Testing for Log out */}
      <div className="flex gap-4">
        <Button
          value="Cancel"
          textColor="text-primary"
          bgColor="bg-tertiary"
          cornerRadius="rounded-md"
          borderColor="border-tertiary"
          width={80}
          handleClick={handleButtonClick}
        />
        <Button
          value="Yes"
          textColor="text-white"
          cornerRadius="rounded-md"
          boldness="font-bold"
          width={80}
          handleClick={handleButtonClick}
        />
      </div>

      {/* Testing for Log In/Sign Up/Forgot Password/Profile TextField */}
      <TextField
        defaultValue="Email"
        value={text}
        onChange={handleInputChange}
      />
      {/* Testing for Password TextField */}
      <TextField
        defaultValue="Password"
        value={text}
        onChange={handleInputChange}
        showPasswordIcon={true}
        type="password"
      />
      {/* Testing for User Comment Functionality */}
      <TextField
        defaultValue="Type your comment here..."
        value={text}
        onChange={handleInputChange}
        bgColor="bg-white"
        cornerRadius="rounded-md"
      />
      {/* Testing for Comment Display */}
      <CommentDisplay
        username="Bao Nguyen"
        userComment="This is a sample comment This is a sample comment 
        This is a sample commentThis is a sample comment This is a sample comment 
        This is a sample comment This is a sample comment This is a sample comment This is a 
        sample comment This is a sample comment "
        userImage="/person.svg"
      />
    </div>
  );
}

export default FormElementsPage;