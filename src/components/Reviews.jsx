import { ReviewCard } from "./ReviewCard";
import styles from "./Reviews.module.css";
const { reviewsWrapper } = styles;

export const Reviews = () => {
  return (
    <main>
      <h2>Reviews</h2>
      <section className={reviewsWrapper}>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </section>
    </main>
  );
};
