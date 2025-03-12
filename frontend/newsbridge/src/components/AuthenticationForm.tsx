import React from "react";
import { TextField, Button } from "./FormElements";

interface AuthenticationFormProps {
  header: string;
  description: string;
  fields: { label: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }[];
  buttonText: string;
  footerText: string;
  footerLinkText: string;
  onFooterLinkClick: () => void;
  onSubmit: (e: React.FormEvent) => void;
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
  buttonWidth,
}) => {
  return (
    <div className="flex flex-col items-center p-6 mt-10 bg-white rounded-lg shadow-md h-auto mx-auto overflow-hidden w-150 justify-self-center">
      <h1 className="text-6xl font-bold mb-4">{header}</h1>
      <p className="text-gray-600 mb-6 text-lg text-justify p-2">{description}</p>
      {fields.map((field, index) => (
        <div key={index} className="mb-4 w-full flex justify-center items-center">
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
        handleClick={() => onSubmit}
        width={buttonWidth}
        bgColor="bg-primary"
        textColor="text-white"
        type="submit"
      />
      <p className="text-primary mt-4">
        {footerText}{" "}
        <span
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={onFooterLinkClick}
        >
          {footerLinkText}
        </span>
      </p>
    </div>
  );
};

export default AuthenticationForm;
