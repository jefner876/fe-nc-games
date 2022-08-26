import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
import { ErrorHandling } from "./ErrorHandling";
import { useReviews } from "../hooks/useReviews";
import { ReviewsSortBar } from "./ReviewsSortBar";
const { reviewsWrapper } = styles;

export const Reviews = ({ categories }) => {
  const sortByOptions = [
    "created_at",
    "title",
    "category",
    "designer",
    "review_body",
    "votes",
    "comment_count",
  ];
  const orderOptions = [
    { screen: "ascending", server: "asc" },
    { screen: "descending", server: "desc" },
  ];

  const { serverError, reviews, isLoading, invalidQueryError } = useReviews(
    categories,
    sortByOptions,
    orderOptions
  );

  if (serverError) return <ErrorHandling error={serverError} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <ReviewsSortBar
        categories={categories}
        sortByOptions={sortByOptions}
        orderOptions={orderOptions}
      />
      <section className={reviewsWrapper}>
        {invalidQueryError ? (
          <ErrorHandling error={invalidQueryError} />
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
