import { Link } from "react-router-dom";
import styles from "../modules/ReviewCard.module.css";
const { reviewHeading, reviewCard, reviewImg, categoryText } = styles;

export const ReviewCard = ({ review }) => {
  const { category, review_img_url, designer, votes, title, review_id } =
    review;

  return (
    <section className={reviewCard}>
      <Link to={`/review/${review_id}`}>
        <img className={reviewImg} src={review_img_url} alt={title} />
      </Link>
      <h3 className={reviewHeading}>{title}</h3>
      <p className={categoryText}>{category}</p>
      <p>Designed by: {designer} </p>
      <p>Score: {votes}</p>
    </section>
  );
};
