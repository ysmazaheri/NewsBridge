import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted data:", formData);
  };

  const handleFooterLinkClick = () => {
    navigate("/sign-up");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthenticationForm
        header="Welcome Back 👋"
        description="Welcome to **NewsBridge**, where diverse perspectives converge to deliver balanced, transparent news for an informed citizenry."
        fields={[
          { label: "Email", type: "email", value: formData.email, onChange: handleEmailChange },
          { label: "Password", type: "password", value: formData.password, onChange: handlePasswordChange },
        ]}
        buttonText="Sign In"
        footerText="Don't have an account?"
        footerLinkText="Sign Up"
        onFooterLinkClick={handleFooterLinkClick}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default SignInPage;