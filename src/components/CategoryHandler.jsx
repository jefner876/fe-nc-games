import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Reviews } from "./Reviews";
import { Home } from "./Home";
import { fetchCategories } from "../api";
import { ReviewPage } from "./ReviewPage";

export const CategoryHandler = () => {
  const [categories, setCategories] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setIsLoading(true);
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/reviews" element={<Reviews categories={categories} />} />
      <Route
        path="/reviews/:category"
        element={<Reviews categories={categories} />}
      />
      <Route path="/" element={<Home categories={categories} />} />
      <Route path="/review/:id" element={<ReviewPage />} />
    </Routes>
  );
};
