import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationForm from "../components/Authentication/AuthenticationForm";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
    setIsPasswordValid(validatePassword(password));
    setDoPasswordsMatch(password === formData.confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setFormData({ ...formData, confirmPassword });
    setDoPasswordsMatch(isPasswordValid && confirmPassword === formData.password);
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
    if (!formData.email && !formData.password && !formData.confirmPassword) {
      toast.error("Please fill out all fields");
      return;
    }
    if (!formData.email) {
      toast.error("Email is required");
      return;
    }
    if (!formData.password || !formData.confirmPassword) {
      toast.error("Password and password confirmation is required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!validatePassword(formData.password)) {
      toast.error("Password must be at least 8 characters long, contain at least one special character, and have a mix of uppercase and lowercase letters");
      return;
    }
    // Handle form submission
    console.log("Submitted data:", formData);
  };

  const handleFooterLinkClick = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AuthenticationForm
          header="Sign Up"
          description="Sign up now to enjoy a community of informed readers and enjoy balanced, transparent news from every side."
          fields={[
            { label: "Email", type: "email", value: formData.email, onChange: handleEmailChange, showIcon: false },
            { label: "Password", type: "password", value: formData.password, onChange: handlePasswordChange, isValid: isPasswordValid, showIcon: true },
            { label: "Confirm Password", type: "password", value: formData.confirmPassword, onChange: handleConfirmPasswordChange, isValid: doPasswordsMatch, showIcon: true },
          ]}
          buttonText="Sign Up"
          footerText="Already have an account?"
          footerLinkText="Sign In"
          onFooterLinkClick={handleFooterLinkClick}
          onSubmit={handleSubmit}
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default SignUpPage;