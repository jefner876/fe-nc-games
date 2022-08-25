import { useEffect, useState } from "react";
import { fetchCategories } from "../api";

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
