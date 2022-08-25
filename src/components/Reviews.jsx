import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
import { useParams } from "react-router-dom";
import { ErrorHandling } from "./ErrorHandling";
import { useReviews } from "../hooks/useReviews";
import { ReviewsSortBar } from "./ReviewsSortBar";
const { reviewsWrapper } = styles;

export const Reviews = ({ categories }) => {
  const { category } = useParams();

  let verifiedCategory = null;
  let categoryError = null;

  const categoryNames = categories.map((category) => {
    return category.slug;
  });

  const categorySelectedInvalid = category && !categoryNames.includes(category);

  if (categorySelectedInvalid) {
    categoryError = { status: 404, msg: "Category not found" };
  } else {
    verifiedCategory = category;
  }

  const { error, reviews, isLoading } = useReviews(verifiedCategory);

  if (error) {
    categoryError = error;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <ReviewsSortBar categories={categories} />
      <section className={reviewsWrapper}>
        {categorySelectedInvalid ? (
          <ErrorHandling error={categoryError} />
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
