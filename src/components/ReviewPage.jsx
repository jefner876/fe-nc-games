import { Link, useParams } from "react-router-dom";
import { useReviewById } from "../hooks/useReviewById";
import { useScore } from "../hooks/useScoreIncrease";
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
  const { review_id } = useParams();
  const { error, review, isLoading } = useReviewById(review_id);
  const { handleScoreClick, clickedScore, scoreError } = useScore(review_id);

  if (error) return <ErrorHandling error={error} />;
  if (isLoading) return <p>Loading...</p>;

  const { category, review_img_url, designer, votes, title, owner } = review;

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
              <p>Score: {votes + clickedScore}</p>
              <button onClick={handleScoreClick}>➕</button>
            </section>
            <p>{scoreError}</p>
            <Link to="/reviews"> Back to List </Link>
          </section>
        </section>
        Comments Section To Go Here
      </section>
    </main>
  );
};
