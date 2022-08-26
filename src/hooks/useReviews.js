import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchReviews } from "../api";

export const useReviews = (categories, sortByOptions, orderOptions) => {
  const [reviews, setReviews] = useState([]);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const order = searchParams.get("order");
  const sortBy = searchParams.get("sortby");
  const { category } = useParams();

  let verifiedCategory = null;
  let verifiedSortBy = null;
  let verifiedOrder = null;

  let invalidQueryError = null;

  const categoryNames = categories.map((category) => {
    return category.slug;
  });
  const validOrderOptions = orderOptions.map((order) => order.server);

  const categorySelectedInvalid = category && !categoryNames.includes(category);
  const sortBySelectedInvalid = sortBy && !sortByOptions.includes(sortBy);
  const orderSelectedInvalid = order && !validOrderOptions.includes(order);

  if (categorySelectedInvalid) {
    invalidQueryError = { status: 404, msg: "Category not found" };
  } else {
    verifiedCategory = category;
  }
  if (sortBySelectedInvalid) {
    invalidQueryError = { status: 404, msg: "Sort by option not found" };
  } else {
    verifiedSortBy = sortBy;
  }
  if (orderSelectedInvalid) {
    invalidQueryError = { status: 404, msg: "Sort order not found" };
  } else {
    verifiedOrder = order;
  }

  useEffect(() => {
    fetchReviews(verifiedCategory, verifiedSortBy, verifiedOrder)
      .then(({ reviews }) => {
        setIsLoading(true);
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => setServerError(err));
  }, [verifiedCategory, verifiedSortBy, verifiedOrder]);

  return { serverError, reviews, isLoading, invalidQueryError };
};
