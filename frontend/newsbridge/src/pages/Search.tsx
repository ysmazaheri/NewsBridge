import ArticleList from "../components/Article/ArticleList";
import SearchComponent from "../components/Search/SearchComponent";
import { UnbiasedArticlePreviewViewModel } from "../entities/viewmodels/UnbiasedArticlePreviewVM";
import { mockArticlePreviews } from "../mock-data/MockArticlePreviews";

const mockArticles: UnbiasedArticlePreviewViewModel[] = mockArticlePreviews;

const Search = () => { 
    return (
        <div className="p-4">
          <div className="bg-gray-100 rounded-xl shadow-md p-4 mb-6 text-center">
            <h2 className="text-3xl font-bold">Search</h2>
          </div>
          <SearchComponent />
          <ArticleList Articles={mockArticles} />
        </div>
      );
}   

export default Search;