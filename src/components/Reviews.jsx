import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
import { useNavigate, useParams } from "react-router-dom";
const { reviewsWrapper, reviewsHeader, categoryDropdown } = styles;

export const Reviews = ({ categories }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { category } = useParams();

  const categoryNames = categories.map((category) => {
    return category.slug;
  });

  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      setIsLoading(true);
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    navigate(`/reviews${category === "all" ? "" : "/" + category}`);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <section className={reviewsHeader}>
        <h2>Reviews</h2>
        <label htmlFor="category">Category: </label>
        <select
          className={categoryDropdown}
          name="category"
          id="category"
          onChange={handleCategoryChange}
          defaultValue={category}
        >
          <option className={categoryDropdown} key="all" value="all">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className={categoryDropdown}
                key={category.slug}
                value={category.slug}
              >
                {category.slug}
              </option>
            );
          })}
        </select>
      </section>
      <p>
        {category && !categoryNames.includes(category)
          ? "404: Category not found"
          : ""}
      </p>
      <section className={reviewsWrapper}>
        {reviews
          .filter((review) => {
            if (!category) return true;
            return review.category === category;
          })
          .map((review) => {
            return (
              <ReviewCard key={review.review_id} review={review}></ReviewCard>
            );
          })}
      </section>
    </main>
  );
};
