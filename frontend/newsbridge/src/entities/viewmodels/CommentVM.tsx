import { Comment } from "../dtos/CommentDTO";

export interface CommentViewModel {
  id: number;
  userId: number;
  unbiasedArticleId: number;
  content: string;
  parentCommendId?: number; // Optional, for threaded comments. Currently not supported.
  createdAt: string;
}

export const mapCommentToViewModel = (comment: Comment): CommentViewModel => ({
  id: comment.comment_id,
  userId: comment.user_id,
  unbiasedArticleId: comment.unbiased_article_id,
  content: comment.content,
  parentCommendId: comment.parent_comment_id || undefined, // Use undefined if not present
  createdAt: comment.created_at,
});
