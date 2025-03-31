import { useUserInteractions } from "../../../context/UserInteractionContext";
import { PiBookmarksSimple, PiBookmarksSimpleDuotone } from "react-icons/pi";

const Bookmark = ({ size = "text-3xl", articleId }: { size?: string; articleId: number }) => {

  const{ bookmarkedArticles, toggleBookmark } = useUserInteractions();

  const hasBookmarked = bookmarkedArticles.has(articleId);

  const handleBookmarkToggle = () => {
    toggleBookmark(articleId);
    // TODO: Replace with actual backend call to update the database. Will require some form of user id.
    setTimeout(() => {
      console.log(`Bookmark status updated: ${!hasBookmarked}`);
    }, 500);
  };

  return (
    <div className="flex">
      <button
        onClick={handleBookmarkToggle}
        className={`transition-transform duration-300 ease-in-out active:scale-90 hover:opacity-80 cursor-pointer ${size}`}
      >
        {hasBookmarked ? <PiBookmarksSimpleDuotone /> : <PiBookmarksSimple />}
      </button>
    </div>
  );
};

export default Bookmark;
