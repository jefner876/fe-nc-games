import { Route, Routes } from "react-router-dom";
import { Reviews } from "./Reviews";
import { Home } from "./Home";
import { ReviewPage } from "./ReviewPage";
import { useCategories } from "../hooks/useCategories";
import { ErrorHandling } from "./ErrorHandling";

export const Router = () => {
  const { categories, error, isLoading } = useCategories();

  if (error) return <ErrorHandling error={error} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/reviews" element={<Reviews categories={categories} />} />
      <Route
        path="/reviews/:category"
        element={<Reviews categories={categories} />}
      />
      <Route path="/" element={<Home categories={categories} />} />
      <Route path="/review/:review_id" element={<ReviewPage />} />
      <Route
        path="*"
        element={
          <ErrorHandling error={{ status: 404, msg: "Route not found" }} />
        }
      />
    </Routes>
  );
};
