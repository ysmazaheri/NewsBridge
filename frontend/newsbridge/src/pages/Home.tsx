import { UnbiasedArticlePreviewViewModel } from "../entities/viewmodels/UnbiasedArticlePreviewVM";
import ArticleList from "../components/Article/ArticleList";

const mockArticles: UnbiasedArticlePreviewViewModel[] = [
  {
    id: 1,
    title: "This is a Title For a News Story",
    summary:
      "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    isLiked: false,
    audienceBiasRating: 50,
    commentCount: 13,
  },
  {
    id: 2,
    title: "This is a Title For a News Story",
    summary:
      "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: false,
    isLiked: false,
    audienceBiasRating: 50,
    commentCount: 19,
  },
  {
    id: 3,
    title: "This is a Title For a News Story",
    summary:
      "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    isLiked: false,
    audienceBiasRating: 50,
    commentCount: 22,
  },
  {
    id: 4,
    title: "This is a Title For a News Story",
    summary:
      "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: false,
    isLiked: false,
    audienceBiasRating: 50,
    commentCount: 10,
  },
  {
    id: 5,
    title: "This is a Title For a News Story",
    summary:
      "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    isLiked: false,
    audienceBiasRating: 50,
    commentCount: 10,
  },
];

const Home = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-100 rounded-xl shadow-md p-4 mb-6 text-center">
        <h2 className="text-3xl font-bold">Trending</h2>
      </div>
      <ArticleList Articles={mockArticles} />
    </div>
  );
};

export default Home;
