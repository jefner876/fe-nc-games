import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchReviews } from "../api";

export const useReviews = (categories) => {
  const [reviews, setReviews] = useState([]);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const sortOptions = Object.fromEntries([...searchParams.entries()]);
  const { category } = useParams();
  const { sortby: sortBy, order } = sortOptions;
  console.log(order);

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
    fetchReviews(verifiedCategory, sortBy)
      .then(({ reviews }) => {
        setIsLoading(true);
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => setServerError(err));
  }, [verifiedCategory, sortBy]);

  return { serverError, reviews, isLoading, invalidCategoryError };
};
