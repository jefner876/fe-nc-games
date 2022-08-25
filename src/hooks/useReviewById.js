import { useEffect, useState } from "react";
import { fetchReviewById } from "../api";

export const useReviewById = (review_id) => {
  const [review, setReview] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviewById(review_id)
      .then(({ review }) => {
        setIsLoading(true);
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [review_id]);
  return { error, review, isLoading };
};
