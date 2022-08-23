import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
const { reviewsWrapper, reviewsHeader } = styles;

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      setIsLoading(true);
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <h2 className={reviewsHeader}>Reviews</h2>
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
