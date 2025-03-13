import { useEffect, useState } from "react";
import { NavbarButton } from "./NavbarButton";
import ProfileDropdown from "./ProfileDropdown";
import SearchComponent from "../Search/SearchComponent";
//Navbar component
const Navbar = () => {
  //State to store current date
  const [curDate, setCurDate] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
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

  return (
    <div>
      <nav className="flex items-center justify-center p-2 bg-tertiary text-primary shadow-md w-screen">
        {/* Left Section */}
        <div className="basis-1/3 flex justify-start items-center hidden xl:flex">
          <div className="flex flex-col items-center">
            <img
              src="/NewsBridgeLogo.png"
              alt="NewsBridge Logo"
              className="w-40 h-14"
            />
            <span className="text-xl font-bold">NewsBridge</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="basis-1/3 flex justify-center items-center w-full space-x-8 md:space-x-6">
          <NavbarButton
            value="Trending"
            textColor="text-primary"
            bgColor="bg-tertiary"
            borderColor="border-transparent"
            img="/trending.svg"
            height="h-16"
            handleClick={() => console.log("Trending clicked")}
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
