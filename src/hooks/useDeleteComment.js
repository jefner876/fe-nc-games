import { useState } from "react";
import { removeComment } from "../api";

export const useDeleteComment = (comment_id) => {
  const [deleteError, setDeleteError] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const handleDeleteCommentClick = () => {
    setDeleteError(null);
    setDeleted(true);
    removeComment(comment_id).catch(() => {
      setDeleted(false);
      setDeleteError("Something went wrong, please try again");
    });
  };
  return { handleDeleteCommentClick, deleted, deleteError };
};
