import styles from "../modules/CommentCard.module.css";
import { secondsToAge } from "../utils/seconds-to-age";
const { commentCard, commentBody, commentCardHeader, postAge } = styles;

export const CommentCard = ({ comment }) => {
  const { body, votes, author, created_at } = comment;
  const age = secondsToAge((new Date() - new Date(created_at)) / 1000);
  return (
    <section className={commentCard}>
      <section className={commentCardHeader}>
        <h4>{author}</h4>
        <p>Score: {votes}</p>
      </section>
      <p className={commentBody}>{body}</p>
      <p className={postAge}>{age}</p>
    </section>
  );
};
