import { useState } from "react";

export const useDeleteComment = () => {
  const [deleteError, setDeleteError] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const handleDeleteCommentClick = () => {
    setDeleteError(null);
    setDeleted(true);
  };
  return { handleDeleteCommentClick, deleted, deleteError };
};
