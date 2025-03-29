import ArticlePreview from "../components/Article/ArticlePreview";

const Home = () => {
  return (
    <div className="p-4">
      <ArticlePreview
        id={1}
        title="Article 1 Title"
        summary="This is a summary. This is a summary. This is a summary. This is a summary. This is a summary. This is a summary. This is a summary. This is a summary. This is a summary. This is a summary."
        likeCount={5}
        biasRating={50}
        daysAgo="3 days ago"
        isBookmarked={true}
        commentCount={10}
        imageUrl="https://via.placeholder.com/600x200"
        content="Full content goes here if needed"
        topic="News"
        genre="Opinion"
        createdAt="2025-03-29T12:00:00Z"
      />
    </div>
  );
};

export default Home;
