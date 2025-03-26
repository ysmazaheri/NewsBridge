import React, { useState } from "react";
import AuthenticationForm from "../components/Authentication/AuthenticationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MockResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required.");
      return;
    }
    console.log("Submitted email:", email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AuthenticationForm
          header="Reset Password"
          description="Please provide your email address to reset your password."
          fields={[
            { label: "Email", type: "email", value: email, onChange: handleEmailChange, showIcon: false },
          ]}
          buttonText="Reset Password"
          footerText="Remember your password?"
          footerLinkText="Sign In"
          onFooterLinkClick={() => toast.info("Navigate to Sign In (mocked)")}
          onSubmit={handleSubmit}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default MockResetPasswordPage;
