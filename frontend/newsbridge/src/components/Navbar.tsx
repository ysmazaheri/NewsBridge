import { useEffect, useState } from 'react';
import { Button } from './FormElements';
import ProfileDropdown from './ProfileDropdown';
import SearchComponent from './SearchComponent';
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
        <nav className="flex items-center justify-between p-2 bg-tertiary text-primary shadow-md px-5">
            <div className="flex flex-col items-center">
                <img src="/NewsBridgeLogo.png" alt="NewsBridge Logo" className="w-34 h-14" />
                <span className="text-xl font-bold">NewsBridge</span>
            </div>
    {/* Buttons for Trending, Search, Bookmarked and Profile Dropdown */}
    <div className="flex space-x-4 flex-grow justify-center">
    <Button
        value="Trending"
        textColor="text-primary"
        width={175}
        bgColor="bg-tertiary"
        borderColor="border-transparent"
        img="/trending.svg"
        height="h-16"
        handleClick={() => {
            console.log("Trending clicked")
        }}
      />
    <Button 
        value="Search"
        textColor="text-primary"
        width={175}
        bgColor="bg-tertiary"
        borderColor="border-transparent"
        img="/searchicon.svg"
        height="h-16"
        handleClick={() => setShowSearch(!showSearch)}
    />
    <Button 
    value="Bookmarked"
    textColor="text-primary"
    width={175}
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
            <div className="flex items-center px-5">
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