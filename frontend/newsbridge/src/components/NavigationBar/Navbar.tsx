import { useEffect, useState } from 'react';
import { NavbarButton } from './NavbarButton';
import ProfileDropdown from './ProfileDropdown';
import SearchComponent from '../Search/SearchComponent';
//Navbar component
const Navbar = () => {

    //State to store current date
    const [curDate, setCurDate] = useState<string>("");
    const [showSearch, setShowSearch] = useState<boolean>(false);
    //On component mount, get current date and set it to state
    useEffect(() => {
        const date = new Date();
        setCurDate(date.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    }, []);

    return (
        <div>
        {/* NewsBridge Logo + Text */}
        <nav className="flex items-center justify-between p-2 bg-tertiary text-primary shadow-md w-screen">
            <div className="flex flex-col items-center hidden lg:block">
                <img src="/NewsBridgeLogo.png" alt="NewsBridge Logo" className="w-40 h-14" />
                <span className="text-xl font-bold">NewsBridge</span>
            </div>
    {/* Buttons for Trending, Search, Bookmarked and Profile Dropdown */}
    <div className="flex justify-center items-center space-x-10 w-full">
    <NavbarButton
        value="Trending"
        textColor="text-primary"
        bgColor="bg-tertiary"
        borderColor="border-transparent"
        img="/trending.svg"
        height="h-16"
        handleClick={() => {
            console.log("Trending clicked")
        }}
      />
    <NavbarButton 
        value="Search"
        textColor="text-primary"
        bgColor="bg-tertiary"
        borderColor="border-transparent"
        img="/searchicon.svg"
        height="h-16"
        handleClick={() => setShowSearch(!showSearch)}
    />
    <NavbarButton 
    value="Bookmarked"
    textColor="text-primary"
    bgColor="bg-tertiary"
    borderColor="border-transparent"
    img="/bookmarkicon.png" 
    height="h-16"
    handleClick={() => console.log('Bookmarks clicked')}
/>
    {/* Profile Dropdown Component */}
    <ProfileDropdown/>
        
    {/* Current Date */}
        </div>
            <div className="items-center px-5 hidden lg:block whitespace-nowrap">
                <span className="text-md text-primary">{curDate}</span>
            </div>
        </nav>
            <div>
                {showSearch && <SearchComponent />}
            </div>
        </div>
    );
};

export default Navbar