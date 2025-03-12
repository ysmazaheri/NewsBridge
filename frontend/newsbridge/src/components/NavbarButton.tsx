import React from "react";
import { fixedWidth } from "../utils/constants";

interface NavbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

export const NavbarButton = (props: NavbarButtonProps) => {
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

  const widthClass = width ? width: fixedWidth;
  const heightClass = height ? height : "h-14";
  const cornerRadiusClass = cornerRadius ? cornerRadius : "rounded-2xl";
  const bgColorClass = bgColor ? bgColor : "bg-primary";
  const borderColorClass = borderColor ? borderColor : "border-primary";
  const textColorClass = textColor ? textColor : "text-white";
  const boldnessClass = boldness ? boldness : "font-normal";

  return (
    <div className="relative"  style={{ width: widthClass }}>
      <button
        onClick={handleClick}
        className={`flex items-center justify-center gap-4 ${heightClass} w-full border ${textColorClass} ${cornerRadiusClass} 
                      ${bgColorClass} ${borderColorClass} text-md ${boldnessClass} transition-transform duration-300 ease-in-out 
                      active:scale-75 hover:brightness-90 text-primary`}
      >
        {img && <img src={img} alt="button icon" className="w-10 h-10" />}
        <span className="hidden md:block">{value}</span> 
      </button>
    </div>
  );
};

export default NavbarButton;
