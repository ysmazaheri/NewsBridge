import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthenticationForm from "../components/Authentication/AuthenticationForm";
import { validatePassword, getPasswordValidation, checkPasswordMatch } from "../utils/validation";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false,
  });
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
    const validation = getPasswordValidation(password);
    setPasswordValidation(validation);
    setIsPasswordValid(validatePassword(password));
    setDoPasswordsMatch(checkPasswordMatch(password, formData.confirmPassword));
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setFormData({ ...formData, confirmPassword });
    setDoPasswordsMatch(checkPasswordMatch(formData.password, confirmPassword));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill out all fields");
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

    // Make API request to the API Gateway
    try {
      const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Sign up successful");
        navigate("/sign-in"); // Navigate to SignIn page
      } else {
        toast.error(data.error || "Sign up failed");
      }
    } catch  {
      toast.error("Error during sign up: ");
    }
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
          passwordValidation={passwordValidation}
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
