import axios from "axios";
import { useEffect, useState } from "react";

const fetchCommentsByReviewID = (review_id) => {
  return axios
    .get(
      `https://nc-games-portfolio.herokuapp.com/api/reviews/${review_id}/comments`
    )
    .then(({ data: comments }) => {
      return comments;
    });
};

export const useComments = (review_id) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByReviewID(review_id)
      .then(({ comments }) => {
        setIsLoading(true);
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [review_id]);
  return { error, comments, isLoading };
};
