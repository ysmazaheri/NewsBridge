import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  NewsBridgeBiasScale,
  UserBiasScale,
} from "../../components/Article/Subcomponents/BiasScale";
import CommentSection from "../../components/Article/CommentSection/CommentSection";
import Sources from "../../components/Article/Subcomponents/Sources";
import Bookmark from "../../components/Article/Subcomponents/Bookmark";
import ShareButton from "../../components/Article/Subcomponents/ShareButton";
import LikeButton from "../../components/Article/Subcomponents/LikeButton";
import { mockArticles } from "../../mock-data/MockArticles";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) {
    return <div>Article not found</div>;
  }
  // TODO: Replace with a database call that retrieves the article by ID
  const article = mockArticles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="my-3 flex flex-col items-center justify-center p-6 bg-white min-h-screen mx-auto overflow-hidden max-w-4xl">
      {/* Title */}
      <div className="flex w-full">
        <h1 className="text-5xl">{article.title}</h1>
      </div>

      {/* Header Meta Data */}
      <div className="flex w-full justify-between items-center">
        {/* Publication Date */}
        <h1 className="text-2xl text-secondary font-light">
          {new Date(article.createdAt).toDateString()}
        </h1>
        <div className="flex items-center gap-2">
          {/* Sources */}
          <Sources articles={article.sources} />
          {/* Like */}
          <LikeButton articleId={parseInt(id)} />
          {/* Bookmark */}
          <Bookmark size="text-3xl" articleId={parseInt(id)} />
          {/* Share */}
          <ShareButton onClick={() => console.log("Shared!")} />
        </div>
      </div>

      {/* Image */}
      <div className="my-5 border border-gray-300 rounded-lg h-100 w-full flex justify-center items-center">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Article"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Article Summary */}
      <div className="my-5 w-full">
        <h2 className="text-xl font-semibold">Summary</h2>
        <pre className="whitespace-pre-wrap font-sans italic">
          {article.summary}
        </pre>
      </div>

      <hr className="my-5 border-gray-300 border-1 w-full" />

      {/* Full Article */}
      <div className="my-5 w-full">
        <h2 className="text-xl font-semibold">Full Article</h2>
        <pre className="whitespace-pre-wrap font-sans">{article.content}</pre>
      </div>

      <hr className="my-5 border-gray-300 border-1 w-full" />

      {/* Bias Ratings */}
      <div className="my-5 w-full flex justify-between space-x-20">
        {/* Audience Rating */}
        <div className="w-full">
          <h3 className="text-lg font-medium pb-3 text-center">
            Audience Bias Rating
          </h3>
          <NewsBridgeBiasScale rating={article.audienceBiasRating} />
        </div>
        {/* User Rating */}
        <div className="w-full">
          <h3 className="text-lg font-medium pb-3 text-center">
            Your Bias Rating
          </h3>
          <UserBiasScale articleId={article.id} />
        </div>
      </div>

      {/* Comments Section */}
      <div className="my-5 w-full">
        <h2 className="text-xl font-semibold">Comments</h2>
        <CommentSection comments={article.comments} articleId={parseInt(id)} />
      </div>
    </div>
  );
};

export default ArticlePage;
