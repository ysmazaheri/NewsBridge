import React, { useState } from "react";
import AuthenticationForm from "../components/Authentication/AuthenticationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MockSignInPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email && !formData.password) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (!formData.email) {
      toast.error("Email is required.");
      return;
    }
    if (!formData.password) {
      toast.error("Password is required.");
      return;
    }

    // Simulate successful sign-in
    toast.success("Sign-in successful!");
    console.log("Submitted data:", formData);
  };

  const handleFooterLinkClick = () => {
    toast.info("Sign-up navigation disabled in mock mode.");
  };

  const handleResetPasswordLinkClick = () => {
    toast.info("Reset password navigation disabled in mock mode.");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AuthenticationForm
          header="Welcome Back 👋"
          description="Welcome to **NewsBridge**, where diverse perspectives converge to deliver balanced, transparent news for an informed citizenry."
          fields={[
            {
              label: "Email",
              type: "email",
              value: formData.email,
              onChange: handleEmailChange,
              showIcon: false,
            },
            {
              label: "Password",
              type: "password",
              value: formData.password,
              onChange: handlePasswordChange,
              showIcon: true,
            },
          ]}
          buttonText="Sign In"
          footerText="Don't have an account?"
          footerLinkText="Sign Up"
          onFooterLinkClick={handleFooterLinkClick}
          onSubmit={handleSubmit}
          secondFooterText="Forgot your password?"
          secondFooterLinkText="Reset Password"
          onSecondFooterLinkClick={handleResetPasswordLinkClick}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default MockSignInPage;
