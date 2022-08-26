import { useEffect, useState } from "react";
import { fetchCommentsByReviewID } from "../api";

export const useComments = (review_id) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshComments, setRefreshComments] = useState(false);

  useEffect(() => {
    fetchCommentsByReviewID(review_id)
      .then(({ comments }) => {
        setIsLoading(true);
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [review_id, refreshComments]);
  return { error, comments, isLoading, setRefreshComments };
};
