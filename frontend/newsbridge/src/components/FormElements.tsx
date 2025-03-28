import React, { useState } from "react";
import { fixedWidth } from "../utils/constants";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string;
  value?: string;
  bgColor?: string;
  borderColor?: string;
  cornerRadius?: string;
  width?: number | string;
  type?: string;
  showPasswordIcon?: boolean;
  showSubmitIcon?: boolean;
  min?: string;
  max?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIconSubmit?: (value: string) => void;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  width?: number;
  height?: string;
  cornerRadius?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  boldness?: string;
  img?: string;
  handleClick: () => void;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue: string;
  value?: string;
  bgColor?: string;
  borderColor?: string;
  cornerRadius?: string;
  width?: string | number; // Allow both string and number for width
  height?: string;
  showSubmitIcon?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onIconSubmit?: (value: string) => void;
}

export const TextField = (props: TextFieldProps) => {
  const {
    defaultValue,
    value,
    bgColor,
    borderColor,
    cornerRadius,
    width = fixedWidth,
    type,
    showPasswordIcon,
    showSubmitIcon,
    min,
    max,
    onChange,
    onIconSubmit,
  } = props;

  const defaultValueClass = defaultValue ? defaultValue : "";
  const bgColorClass = bgColor ? bgColor : "bg-tertiary";
  const borderColorClass = borderColor ? borderColor : "border-tertiary";
  const cornerRadiusClass = cornerRadius ? cornerRadius : "rounded-2xl";
  const widthClass = width ? width : fixedWidth;
  const typeClass = type ? type : "text";
  const showPasswordIconClass = showPasswordIcon ? showPasswordIcon : false;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType =
    typeClass === "password"
      ? isPasswordVisible
        ? "text"
        : "password"
      : typeClass;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleSubmit = () => {
    if (onIconSubmit) onIconSubmit(value || "");
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative" style={{ width: widthClass }}>
      <input
        placeholder={defaultValueClass}
        value={value}
        onChange={handleChange}
        type={inputType}
        className={`p-4 text-md text-black border-2 w-full ${bgColorClass} 
                          ${borderColorClass} ${cornerRadiusClass}`}
        min={min ? min : ""}
        max={max ? max : ""}
      />
      {showPasswordIconClass && (
        <img
          src={isPasswordVisible ? "/showpassword.svg" : "/hidepassword.svg"}
          alt={isPasswordVisible ? "Show password" : "Hide password"}
          onClick={togglePasswordVisibility}
          className="absolute right-6 top-4 cursor-pointer w-[20px] h-[28px]"
        />
      )}
      {showSubmitIcon && (
        <img
          src="submiticon.svg"
          alt="Submit Icon"
          onClick={handleSubmit}
          className="absolute right-6 top-4 cursor-pointer w-[20px] h-[28px]"
        />
      )}
    </div>
  );
};

export const Button = (props: ButtonProps) => {
  const {
    value,
    width,
    height,
    cornerRadius,
    bgColor,
    borderColor,
    textColor,
    boldness,
    img,
    handleClick,
  } = props;

  const widthClass = width ? width : fixedWidth;
  const heightClass = height ? height : "h-14";
  const cornerRadiusClass = cornerRadius ? cornerRadius : "rounded-2xl";
  const bgColorClass = bgColor ? bgColor : "bg-primary";
  const borderColorClass = borderColor ? borderColor : "border-primary";
  const textColorClass = textColor ? textColor : "text-white";
  const boldnessClass = boldness ? boldness : "font-normal";

  return (
    <div className="relative" style={{ width: widthClass }}>
      <button
        onClick={handleClick}
        style={{ backgroundColor: bgColor }}
        className={`flex items-center justify-center gap-4 ${heightClass} w-full border ${textColorClass} ${cornerRadiusClass} 
                      ${bgColorClass} ${borderColorClass} text-md ${boldnessClass} transition-transform duration-300 ease-in-out 
                      active:scale-75 hover:brightness-90 text-primary`}
      >
        {img && <img src={img} alt="button icon" className="w-10 h-10" />}
        {value}
      </button>
    </div>
  );
};

export const TextArea = (props: TextAreaProps) => {
  const {
    defaultValue,
    value,
    bgColor,
    borderColor,
    cornerRadius,
    width = fixedWidth,
    height = "100px",
    showSubmitIcon,
    onChange,
    onIconSubmit,
  } = props;

  const defaultValueClass = defaultValue ? defaultValue : "";
  const bgColorClass = bgColor ? bgColor : "bg-tertiary";
  const borderColorClass = borderColor ? borderColor : "border-tertiary";
  const cornerRadiusClass = cornerRadius ? cornerRadius : "rounded-2xl";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
  };

  const handleSubmit = () => {
    if (onIconSubmit) onIconSubmit(value || "");
  };

  return (
    <div className="relative" style={{ width }}>
      <textarea
        placeholder={defaultValueClass}
        value={value}
        onChange={handleChange}
        className={`p-4 text-md text-black border-2 w-full resize-none ${bgColorClass} 
                          ${borderColorClass} ${cornerRadiusClass}`}
        style={{
          wordWrap: "break-word", // Ensures long text wraps to the next line
          whiteSpace: "pre-wrap", // Preserves spaces and line breaks
          paddingRight: showSubmitIcon ? "40px" : "10px", // Adds padding for the icon
          height: height, // Sets the height of the textarea
        }}
      />
      {showSubmitIcon && (
        <img
          src="submiticon.svg"
          alt="Submit Icon"
          onClick={handleSubmit}
          className="absolute right-6 top-4 cursor-pointer w-[20px] h-[28px]"
        />
      )}
    </div>
  );
};
