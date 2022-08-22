import styles from "./ReviewCard.module.css";
const { reviewHeading, reviewCard, votesRow, reviewImg, imgCard } = styles;

export const ReviewCard = ({ review }) => {
  const { category, review_img_url, designer, votes, title } = review;

  return (
    <section className={reviewCard}>
      <img className={reviewImg} src={review_img_url} alt="" />
      <h3 className={reviewHeading}>{title}</h3>
      <p>{category}</p>
      <p>
        Designed by: <br></br> {designer}{" "}
      </p>
      <p>{votes}</p>
    </section>
  );
};
