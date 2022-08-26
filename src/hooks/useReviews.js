import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchReviews } from "../api";

export const useReviews = (categories) => {
  const [reviews, setReviews] = useState([]);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const order = searchParams.get("order");
  const sortBy = searchParams.get("sortby");
  const { category } = useParams();

  let verifiedCategory = null;
  let invalidCategoryError = null;
  const categoryNames = categories.map((category) => {
    return category.slug;
  });
  const categorySelectedInvalid = category && !categoryNames.includes(category);
  if (categorySelectedInvalid) {
    invalidCategoryError = { status: 404, msg: "Category not found" };
  } else {
    verifiedCategory = category;
  }

  useEffect(() => {
    fetchReviews(verifiedCategory, sortBy, order)
      .then(({ reviews }) => {
        setIsLoading(true);
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => setServerError(err));
  }, [verifiedCategory, sortBy, order]);

  return { serverError, reviews, isLoading, invalidCategoryError };
};
