import axios from "axios";
import { useEffect, useState } from "react";

export const fetchReviews = (category) => {
  let queryString = "https://nc-games-portfolio.herokuapp.com/api/reviews";
  if (category) queryString += `?category=${category}`;

  return axios.get(queryString).then(({ data: reviews }) => {
    return reviews;
  });
};

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
