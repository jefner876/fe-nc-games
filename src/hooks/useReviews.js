import { useEffect, useState } from "react";
import { fetchReviews } from "../api";

export const useReviews = (category) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews(category)
      .then(({ reviews }) => {
        setIsLoading(true);
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [category]);

  return { error, reviews, isLoading };
};
