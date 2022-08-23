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
  const verifiedCategory =
    category && !categoryNames.includes(category) ? null : category;

  useEffect(() => {
    fetchReviews(verifiedCategory).then(({ reviews }) => {
      setIsLoading(true);
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [verifiedCategory]);

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
      <section className={reviewsWrapper}>
        {category && !categoryNames.includes(category)
          ? "404: Category not found"
          : reviews.map((review) => {
              return (
                <ReviewCard key={review.review_id} review={review}></ReviewCard>
              );
            })}
      </section>
    </main>
  );
};
