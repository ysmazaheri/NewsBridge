import { useEffect, useState } from "react";
import { NavbarButton } from "./NavbarButton";
import ProfileDropdown from "./ProfileDropdown";
import SearchComponent from "../Search/SearchComponent";
import { useNavigate } from "react-router-dom";
//Navbar component
const Navbar = () => {
  //State to store current date
  const [curDate, setCurDate] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>("/logo-light-bg.png");
  const navigate = useNavigate();

  //On component mount, get current date and set it to state
  useEffect(() => {
    const date = new Date();
    setCurDate(
      date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    const navElement = document.querySelector("nav");
    if (navElement) {
      const bgColor = window.getComputedStyle(navElement).backgroundColor;
      const isDarkBackground = checkIfDark(bgColor);
      setLogoSrc(isDarkBackground ? "/logo-dark-bg.png" : "/logo-light-bg.png");
    }
  }, []);

  const checkIfDark = (color: string): boolean => {
    const rgb = color.match(/\d+/g)?.map(Number);
    if (!rgb || rgb.length < 3) return false;
    const [r, g, b] = rgb;
    // Calculate luminance
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance < 128; // Threshold for dark background
  };

  return (
    <div>
      <nav className="flex items-center justify-center p-2 bg-tertiary text-primary shadow-md w-screen">
        {/* Left Section */}
        <div className="basis-1/3 flex justify-start items-center hidden xl:flex">
          <div className="flex flex-row items-center space-x-2 pl-2">
            <img
              src={logoSrc}
              alt="NewsBridge Logo"
              className="max-w-full max-h-full object-contain w-17 h-17"
            />
            <span className="text-3xl font-bold">NewsBridge</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="basis-1/3 flex justify-center items-center w-full space-x-8 md:space-x-0">
          <NavbarButton
            value="Trending"
            textColor="text-primary"
            bgColor="bg-tertiary"
            borderColor="border-transparent"
            img="/trending.svg"
            height="h-16"
            handleClick={() => navigate("/trending")}
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
            img="/bookmarkicon.svg"
            height="h-16"
            handleClick={() => console.log("Bookmarks clicked")}
          />
          <ProfileDropdown />
        </div>

        {/* Right Section */}
        <div className="basis-1/3 flex justify-end items-center px-5 hidden xl:flex whitespace-nowrap">
          <span className="text-md text-primary">{curDate}</span>
        </div>
      </nav>

      <div>{showSearch && <SearchComponent />}</div>
    </div>
  );
};

export default Navbar;
