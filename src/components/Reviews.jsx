import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { ReviewCard } from "./ReviewCard";
import styles from "./Reviews.module.css";
const { reviewsWrapper, reviewsHeader, categoryDropdown } = styles;

export const Reviews = ({ categories }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      setIsLoading(true);
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <h2 className={reviewsHeader}>Reviews</h2>
      <label htmlFor="category">Category: </label>
      <select name="category" id="category" onChange={handleCategoryChange}>
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
      <section className={reviewsWrapper}>
        {reviews.map((review) => {
          return (
            <ReviewCard key={review.review_id} review={review}></ReviewCard>
          );
        })}
      </section>
    </main>
  );
};
