import React from "react";
import { TextField, Button } from "../FormElements";
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface AuthenticationFormProps {
  header: string;
  description: string;
  fields: { label: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; isValid?: boolean }[];
  buttonText: string;
  footerText: string;
  footerLinkText: string;
  onFooterLinkClick: () => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonWidth?: number;
  secondFooterText?: string;
  secondFooterLinkText?: string;
  onSecondFooterLinkClick?: () => void;
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
  secondFooterText,
  secondFooterLinkText,
  onSecondFooterLinkClick,
}) => {
  const components: Components = {
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-gray-600 mb-6 text-lg text-justify p-2" {...props} />,
  };

  return (
    <div className="flex flex-col items-center p-6 mt-10 bg-white h-auto mx-auto overflow-hidden w-150 justify-self-center">
      <h1 className="text-6xl font-bold mb-4">{header}</h1>
      <ReactMarkdown components={components}>{description}</ReactMarkdown>
      {fields.map((field, index) => (
        <div key={index} className="mb-4 w-full flex justify-center items-center relative">
          <TextField
            defaultValue={field.label}
            value={field.value}
            onChange={field.onChange}
            type={field.type}
          />
          {field.isValid !== undefined && (
            <span className={`absolute right-3 ${field.isValid ? 'text-green-500' : 'text-red-500'}`}>
              {field.isValid ? <FaCheckCircle /> : <FaTimesCircle />}
            </span>
          )}
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
      {secondFooterText && secondFooterLinkText && onSecondFooterLinkClick && (
        <p className="text-primary mt-1">
          {secondFooterText}{" "}
          <span
            className="text-blue-500 hover:text-blue-600 cursor-pointer"
            onClick={onSecondFooterLinkClick}
          >
            {secondFooterLinkText}
          </span>
        </p>
      )}
    </div>
  );
};

export default AuthenticationForm;
