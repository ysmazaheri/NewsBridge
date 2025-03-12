import React, { JSX } from "react";
import { CheckCircle, Circle } from "lucide-react";

interface DropdownOption {
    label: string;
    value: string;
    str?: string; // Used for search query ex. "Posted Today vs Posted in the last 7 days"
}               //Need to add "in the last" to the query if the option is "Last 7 days" or "Last 30 days"

interface DropdownProps {
    label: string;
    options: DropdownOption[];
    selectedValue: string;
    onSelect: (value: string) => void;
    isOpen: boolean;
    toggleDropdown: (event: React.MouseEvent) => void;
    icon: JSX.Element;
    ref: React.RefObject<HTMLDivElement | null>;
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
    selectedValue,
    onSelect,
    isOpen,
    toggleDropdown,
    icon,
    ref,
}) => {
    return (
        <div className="relative flex justify-center items-center" ref={ref}>
            <button
                onClick={toggleDropdown}
                className="min-w-[163px] px-3 py-1.5 border border-gray-300 rounded-full text-left flex justify-between items-center hover:bg-gray-100"
            >
                {icon}
                <span>{selectedValue ? options.find((o) => o.value === selectedValue)?.label : label}</span>
                <span className="ml-1">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => onSelect(option.value)}
                        >
                            {selectedValue === option.value ? (
                                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                            ) : (
                                <Circle className="w-5 h-5 text-gray-400 mr-2" />
                            )}
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
