import { useState, useEffect, useRef } from 'react';

const ProfileDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // Ref for dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="relative mt-1 px-5 max-[380px]:translate-x-7" ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center cursor-pointer space-x-3 hover:brightness-90 hover:shadow-lg transition duration-100 ease-in-out p-2 rounded-lg"
            >
                {/* Insert user image in the future */}
                <img
                    src="/ProfileIcon.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
                {/* Insert user's name in the future */}
                <span className="text-md text-primary hidden md:block">Insert Name</span>
                <span>{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md overflow-hidden bg-white border border-gray-200">
                    {/* Profile Button */}
                    <button
                        className="w-full text-left py-2 px-4 text-primary hover:bg-gray-100"
                        onClick={() => {
                            console.log("Profile clicked");
                            setIsDropdownOpen(false);
                        }}
                    >
                        Profile
                    </button>
                    {/* Logout Button */}
                    <button
                        className="w-full text-left py-2 px-4 text-red-600 hover:bg-red-100"
                        onClick={() => {
                            console.log("Logout clicked");
                            setIsDropdownOpen(false);
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
