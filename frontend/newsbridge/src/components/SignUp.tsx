import React, { useState } from "react";
import AuthenticationForm from "./AuthenticationForm";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, confirmPassword: e.target.value });
  };

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasSpecialChar;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!validatePassword(formData.password)) {
      alert("Password must be at least 8 characters long, contain at least one special character, and have a mix of uppercase and lowercase letters");
      return;
    }
    // Handle form submission
    console.log("Submitted data:", formData);
  };

  const handleFooterLinkClick = () => {
    // Handle footer link click
    console.log("Routed to Sign Up page");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthenticationForm
        header="Sign Up"
        description="Sign up now to enjoy a community of informed readers and enjoy balanced, transparent news from every side."
        fields={[
          { label: "Email", type: "email", value: formData.email, onChange: handleEmailChange },
          { label: "Password", type: "password", value: formData.password, onChange: handlePasswordChange },
          { label: "Confirm Password", type: "password", value: formData.confirmPassword, onChange: handleConfirmPasswordChange },
        ]}
        buttonText="Sign Up"
        footerText="Already have an account?"
        footerLinkText="Sign In"
        onFooterLinkClick={handleFooterLinkClick}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default SignUpPage;