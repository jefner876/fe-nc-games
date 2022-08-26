import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
import { ErrorHandling } from "./ErrorHandling";
import { useReviews } from "../hooks/useReviews";
import { ReviewsSortBar } from "./ReviewsSortBar";
const { reviewsWrapper } = styles;

export const Reviews = ({ categories }) => {
  const { serverError, reviews, isLoading, invalidCategoryError } =
    useReviews(categories);

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

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <ReviewsSortBar
        categories={categories}
        sortByOptions={sortByOptions}
        orderOptions={orderOptions}
      />
      <section className={reviewsWrapper}>
        {serverError ? (
          <ErrorHandling error={serverError} />
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
