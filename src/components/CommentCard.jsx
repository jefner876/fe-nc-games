import styles from "../modules/CommentCard.module.css";
const { commentCard, commentBody, commentCardHeader } = styles;

export const CommentCard = ({ comment }) => {
  const { body, votes, author } = comment;
  return (
    <section className={commentCard}>
      <section className={commentCardHeader}>
        <h4>{author}</h4>
        <p>Score: {votes}</p>
      </section>
      <p className={commentBody}>{body}</p>
    </section>
  );
};
