import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import styles from "../modules/ReviewPage.module.css";
import { ErrorHandling } from "./ErrorHandling";

const {
  reviewHeading,
  reviewWrapper,
  reviewImg,
  categoryText,
  reviewImageBlockWrapper,
  reviewDetailsWrapper,
  scoreSection,
} = styles;

export const ReviewPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState({});
  const [error, setError] = useState(null);

  const { review_id } = useParams();
  const { category, review_img_url, designer, votes, title, owner } = review;

  useEffect(() => {
    fetchReviewById(review_id)
      .then(({ review }) => {
        setIsLoading(true);
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [review_id]);

  if (error) return <ErrorHandling error={error} />;
  if (isLoading) return <p>Loading...</p>;
  return (
    <main>
      <section className={reviewWrapper}>
        <h3 className={reviewHeading}>{title}</h3>
        <section className={reviewImageBlockWrapper}>
          <img className={reviewImg} src={review_img_url} alt={title} />
          <section className={reviewDetailsWrapper}>
            <p className={categoryText}>Category: {category}</p>
            <p>Designed by: {designer} </p>
            <p>Owned by: {owner} </p>
            <section className={scoreSection}>
              <p>Score: {votes}</p>
              <button>➕</button>
            </section>
            <Link to="/reviews"> Back to List </Link>
          </section>
        </section>
        Comments Section To Go Here
      </section>
    </main>
  );
};
