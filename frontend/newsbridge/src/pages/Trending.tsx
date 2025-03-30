import ArticlePreview from "../components/Article/ArticlePreview";
import { UnbiasedArticlePreviewViewModel } from "../entities/viewmodels/UnbiasedArticlePreviewVM";
import { useState } from "react";

const mockArticles: UnbiasedArticlePreviewViewModel[] = [
  {
    id: 1,
    title: "This is a Title For a News Story",
    summary: "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    content: "Full content of the article",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    biasRating: 50,
    commentCount: 13,
  },
  {
    id: 2,
    title: "This is a Title For a News Story",
    summary: "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    content: "Full content of the article",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    biasRating: 50,
    commentCount: 19,
  },
  {
    id: 3,
    title: "This is a Title For a News Story",
    summary: "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    content: "Full content of the article",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    biasRating: 50,
    commentCount: 22,
  },
  {
    id: 4,
    title: "This is a Title For a News Story",
    summary: "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    content: "Full content of the article",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    biasRating: 50,
    commentCount: 10,
  },
  {
    id: 5,
    title: "This is a Title For a News Story",
    summary: "This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page. This is a summary of a news article that is being displayed on the home page.",
    content: "Full content of the article",
    imageUrl: "/",
    topic: "US News",
    likeCount: 10,
    genre: "News",
    createdAt: "2025-10-10",
    daysAgo: "3 days ago",
    isBookmarked: true,
    biasRating: 50,
    commentCount: 10,
  },
]
const itemPerPage = 3
const Trending = () => {
  const [curPage, setCurPage] = useState(1);
  const totalPages = Math.ceil(mockArticles.length / itemPerPage);


  const handlePageChange = (newPage: number) => {
    if(newPage >=1 && newPage <= totalPages){
      setCurPage(newPage)
    }
  }
  const paginatedArticles = mockArticles.slice(
    (curPage - 1) * itemPerPage,
    curPage * itemPerPage
  );

  return (
    <div className="p-4">
      <div className="bg-gray-100 rounded-xl shadow-md p-4 mb-6 text-center">
        <h2 className="text-3xl font-bold">Trending</h2>
        </div>
        <div className="space-y-10">
        {paginatedArticles.map((article) => (
          <ArticlePreview
            key={article.id}
            id={article.id}
            content="Full content of the article"
            createdAt="2025-10-10"
            title={article.title}
            summary={article.summary}
            likeCount={article.likeCount}
            biasRating={50} 
            daysAgo={article.createdAt}
            isBookmarked={false}
            commentCount={article.commentCount}
            imageUrl={article.imageUrl || "/images/default.jpg"}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button 
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50" 
          onClick={() => handlePageChange(curPage - 1)} 
          disabled={curPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 font-bold">Page {curPage} of {totalPages}</span>
        <button 
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50" 
          onClick={() => handlePageChange(curPage + 1)} 
          disabled={curPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Trending;
