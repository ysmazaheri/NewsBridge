import { useState } from "react";
import { PiBookmarksSimple, PiBookmarksSimpleDuotone } from "react-icons/pi";

const Bookmark = ({ size = "text-3xl" }) => {
  // TODO: Replace with actual backend call to determine how the bookmarked icon should initialize
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    // TODO: Replace with actual backend call to update the database. Will require some form of user id.
    setTimeout(() => {
      console.log(`Bookmark status updated: ${!bookmarked}`);
    }, 500);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleBookmark}
        className={`transition-transform duration-300 ease-in-out active:scale-90 hover:opacity-80 cursor-pointer ${size}`}
      >
        {bookmarked ? <PiBookmarksSimpleDuotone /> : <PiBookmarksSimple />}
      </button>
    </div>
  );
};

export default Bookmark;
