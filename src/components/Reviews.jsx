import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
import { ErrorHandling } from "./ErrorHandling";
import { useReviews } from "../hooks/useReviews";
import { ReviewsSortBar } from "./ReviewsSortBar";
const { reviewsWrapper } = styles;

export const Reviews = ({ categories }) => {
  const { serverError, reviews, isLoading, invalidCategoryError } =
    useReviews(categories);
  const error = invalidCategoryError || serverError || null;

  const sortByOptions = [
    "created_at",
    "title",
    "category",
    "designer",
    "review_body",
    "votes",
    "comment_count",
  ];

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <ReviewsSortBar categories={categories} sortByOptions={sortByOptions} />
      <section className={reviewsWrapper}>
        {error ? (
          <ErrorHandling error={error} />
        ) : (
          reviews.map((review) => {
            return (
              <ReviewCard key={review.review_id} review={review}></ReviewCard>
            );
          })
        )}
      </section>
    </main>
  );
};
