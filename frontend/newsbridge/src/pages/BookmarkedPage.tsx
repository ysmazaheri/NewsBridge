import { UnbiasedArticlePreviewViewModel } from "../entities/viewmodels/UnbiasedArticlePreviewVM";
import ArticleList from "../components/Article/ArticleList";
import { mockArticlePreviews } from "../mock-data/MockArticlePreviews";

const mockArticles: UnbiasedArticlePreviewViewModel[] = mockArticlePreviews;

const BookmarkedPage = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-100 rounded-xl shadow-md p-4 mb-6 text-center">
        <h2 className="text-3xl font-bold">Bookmarked Articles</h2>
      </div>
      <ArticleList
        Articles={mockArticles}
        filter={(articles: UnbiasedArticlePreviewViewModel[]) =>
          articles.filter((article) => article.isBookmarked)
        }
      />
    </div>
  );
};

export default BookmarkedPage;
