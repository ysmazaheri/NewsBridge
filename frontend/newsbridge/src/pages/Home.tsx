import ArticlePreview from "../components/Article/ArticlePreview";

const Home = () => {
  return (
    <div className="p-4">
      <ArticlePreview
        title="Article 1 Title"
        summary="This is a summary. This is a summary. This is a summary. This is a summary. This is a summary. 
        This is a summary. This is a summary. This is a summary. This is a summary. This is a summary."
        likes={5}
        biasRating={50}
        daysAgo="3 days ago"
        isBookmarked={true}
        commentCount={10}
      />
    </div>
  );
};

export default Home;
