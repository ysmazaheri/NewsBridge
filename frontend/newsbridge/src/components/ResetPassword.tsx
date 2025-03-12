import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
  };

  const handleFooterLinkClick = () => {
    navigate("/sign-in");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthenticationForm
        header="Reset Password"
        description="Please provide your email address to reset your password."
        fields={[
          { label: "Email", type: "email", value: email, onChange: handleEmailChange },
        ]}
        buttonText="Reset Password"
        footerText="Remember your password?"
        footerLinkText="Sign In"
        onFooterLinkClick={handleFooterLinkClick}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default ResetPasswordPage;
