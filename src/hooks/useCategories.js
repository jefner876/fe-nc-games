import axios from "axios";
import { useEffect, useState } from "react";

const fetchCategories = () => {
  return axios
    .get("https://nc-games-portfolio.herokuapp.com/api/categories")
    .then(({ data: categories }) => {
      return categories;
    });
};

export const useCategories = () => {
  const [categories, setCategories] = useState("all");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories()
      .then(({ categories }) => {
        setIsLoading(true);
        setCategories(categories);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, []);
  return { categories, error, isLoading };
};
