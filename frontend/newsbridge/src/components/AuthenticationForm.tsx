import React from "react";
import { TextField, Button } from "./FormElements";
import { fixedWidth } from "../utils/constants"; // Import fixedWidth

interface AuthenticationFormProps {
  header: string;
  description: string;
  fields: { label: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[];
  buttonText: string;
  footerText: string;
  footerLinkText: string;
  onFooterLinkClick: () => void;
  onSubmit: () => void;
  buttonWidth?: number;
}

const AuthenticationForm: React.FC<AuthenticationFormProps> = ({
  header,
  description,
  fields,
  buttonText,
  footerText,
  footerLinkText,
  onFooterLinkClick,
  onSubmit,
  buttonWidth = fixedWidth,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">{header}</h1>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      {fields.map((field, index) => (
        <div key={index} className="mb-4 w-full">
          <TextField
            defaultValue={field.label}
            value={field.value}
            onChange={field.onChange}
            type={field.type}
          />
        </div>
      ))}
      <Button
        value={buttonText}
        handleClick={onSubmit}
        width={buttonWidth}
        bgColor="bg-primary"
        textColor="text-white"
      />
      <p className="text-gray-600 mt-4">
        {footerText}{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={onFooterLinkClick}
        >
          {footerLinkText}
        </span>
      </p>
    </div>
  );
};

export default AuthenticationForm;
