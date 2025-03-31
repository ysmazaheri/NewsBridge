import React, { createContext, useContext, useEffect, useState } from "react";
import { CommentViewModel } from "../entities/viewmodels/CommentVM";
interface UserInteractionContextType {
    likedArticles: Set<number>;
    bookmarkedArticles: Set<number>;
    userComments: Record<number, CommentViewModel[]>;
    userBiasRatings: Record<number, number>;
    toggleLike: (articleId: number) => void;
    toggleBookmark: (articleId: number) => void;
    addComment: (articleId: number, comment: CommentViewModel) => void;
    addBiasRating: (articleId: number, rating: number) => void;  

}


export const UserInteractionContext = createContext<UserInteractionContextType | undefined>(undefined);


export const UserInteractionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [likedArticles, setLikedArticles] = useState<Set<number>>(new Set());
    const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<number>>(new Set());
    const [userComments, setUserComments] = useState<Record<number, CommentViewModel[]>>({});
    const [userBiasRatings, setUserBiasRatings] = useState<Record<number, number>>({});
    const [initialized, setInitialized] = useState(false);
    

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem("likedArticles") || "[]");
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarkedArticles") || "[]");
        const storedComments = JSON.parse(localStorage.getItem("userComments") || "{}");
        const storedBiasRatings = JSON.parse(localStorage.getItem("userBiasRatings") || "{}");
        setLikedArticles(new Set(storedLikes));
        setBookmarkedArticles(new Set(storedBookmarks));
        setUserComments(storedComments);
        setUserBiasRatings(storedBiasRatings);
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (!initialized) return;
        localStorage.setItem("likedArticles", JSON.stringify([...likedArticles]));
        localStorage.setItem("bookmarkedArticles", JSON.stringify([...bookmarkedArticles]));
        localStorage.setItem("userComments", JSON.stringify(userComments));
        localStorage.setItem("userBiasRatings", JSON.stringify(userBiasRatings));
    }, [likedArticles, bookmarkedArticles, userComments, userBiasRatings, initialized]);

      const toggleLike = (articleId: number) => {
        setLikedArticles((prev) => {
          const newLikes = new Set(prev);
          if (newLikes.has(articleId)) {
            newLikes.delete(articleId);
          } else {
            newLikes.add(articleId);
          }
          return newLikes;
        });
      };
      const toggleBookmark = (articleId: number) => {
        setBookmarkedArticles((prev) => {
          const newBookmarks = new Set(prev);
          if (newBookmarks.has(articleId)) {
            newBookmarks.delete(articleId);
          } else {
            newBookmarks.add(articleId);
          }
          return newBookmarks;
        });
      };

      const addComment = (articleId: number, comment: CommentViewModel) => {
        setUserComments((prev) => {
          const newComments = { ...prev };
          if (!newComments[articleId]) {
            newComments[articleId] = [];
          }
          const existingComment = newComments[articleId].find(
            (c)=>c.id === comment.id
          )
            if (existingComment) {
                return newComments;
            }
          newComments[articleId].push(comment);
          return newComments;
        });
      };
      const addBiasRating = (articleId: number, rating: number) => {
        setUserBiasRatings((prev) => {
            const newRatings = { ...prev };
            newRatings[articleId] = rating;
            return newRatings;
        });
    };

      return (
        <UserInteractionContext.Provider value={{ likedArticles, bookmarkedArticles, userComments, userBiasRatings, toggleLike, toggleBookmark, addComment, addBiasRating }}>
          {children}
        </UserInteractionContext.Provider>
      );
};

export const useUserInteractions = () => {
    const context = useContext(UserInteractionContext);
    if (!context) {
        throw new Error("Not wrapped in UserInteractionProvider");
    }
    return context;
}

