import styles from "./ReviewCard.module.css";
const { reviewHeading, reviewCard, votesRow, reviewImg } = styles;

export const ReviewCard = () => {
  return (
    <section className={reviewCard}>
      <h3 className={reviewHeading}>Title</h3>
      <img
        className={reviewImg}
        src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
        alt=""
      />
      <p>Category</p>
      <section className={votesRow}>
        <p>Designer </p>
        {"  |  "}
        <p>Votes</p>
      </section>
    </section>
  );
};
