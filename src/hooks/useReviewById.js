import axios from "axios";
import { useEffect, useState } from "react";

const fetchReviewById = (review_id) => {
  return axios
    .get(`https://nc-games-portfolio.herokuapp.com/api/reviews/${review_id}`)
    .then(({ data: review }) => {
      return review;
    });
};

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
