import ArticlePreview from "../Article/ArticlePreview";
import { useState, useEffect } from "react";
import { UnbiasedArticlePreviewViewModel } from "../../entities/viewmodels/UnbiasedArticlePreviewVM";

interface ArticleListProp {
  Articles: UnbiasedArticlePreviewViewModel[];
  filter?: (
    articles: UnbiasedArticlePreviewViewModel[]
  ) => UnbiasedArticlePreviewViewModel[];
  itemsPerPage?: number;
}

const ArticleList = (props: ArticleListProp) => {
  const articles = props.filter ? props.filter(props.Articles) : props.Articles;
  const itemsPerPage = props.itemsPerPage ?? 3;
  const [curPage, setCurPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(articles.length / itemsPerPage));

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurPage(newPage);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [curPage]);

  const paginatedArticles = articles.slice(
    (curPage - 1) * itemsPerPage,
    curPage * itemsPerPage
  );

  return (
    <div>
      <div className="space-y-10">
        {paginatedArticles.map((article) => (
          <ArticlePreview
            key={article.id}
            id={article.id}
            createdAt="2025-10-10"
            title={article.title}
            summary={article.summary}
            likeCount={article.likeCount}
            audienceBiasRating={article.audienceBiasRating}
            daysAgo={article.daysAgo}
            isBookmarked={article.isBookmarked}
            isLiked={article.isLiked}
            commentCount={article.commentCount}
            imageUrl={article.imageUrl || "/images/default.jpg"}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className="w-25 px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 enabled:hover:bg-gray-400 enabled:hover:shadow-md transition duration-200 disabled:cursor-not-allowed enabled:cursor-pointer"
          onClick={() => handlePageChange(curPage - 1)}
          disabled={curPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 font-bold">
          Page {curPage} of {totalPages}
        </span>
        <button
          className="w-25 px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 enabled:hover:bg-gray-400 enabled:hover:shadow-md transition duration-200 disabled:cursor-not-allowed enabled:cursor-pointer"
          onClick={() => handlePageChange(curPage + 1)}
          disabled={curPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
