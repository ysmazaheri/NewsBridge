import { Comment } from "../dtos/CommentDTO";
import { UserViewModel } from "./UserVM";

export interface CommentViewModel {
  id: number;
  user: UserViewModel | null; //TODO: Remove acceptance of null as an option here
  content: string;
  parentCommendId?: number; // Optional, for threaded comments. Currently not supported.
  createdAt: string;
}

export const mapCommentToViewModel = (comment: Comment): CommentViewModel => ({
  id: comment.comment_id,
  user: null, //TODO: Get the user using a database call
  content: comment.content,
  parentCommendId: comment.parent_comment_id || undefined, // Use undefined if not present
  createdAt: comment.created_at,
});
