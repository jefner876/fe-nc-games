import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useDeleteComment } from "../hooks/useDeleteComment";
import styles from "../modules/CommentCard.module.css";
import { secondsToAge } from "../utils/seconds-to-age";

const { commentCard, commentBody, commentCardHeader, postAge, deleteButton } =
  styles;

export const CommentCard = ({ comment }) => {
  const { body, votes, author, created_at, comment_id } = comment;
  const { user } = useContext(UserContext);
  const userIsAuthor = user.username === author;
  const age = secondsToAge((new Date() - new Date(created_at)) / 1000);
  const { handleDeleteCommentClick, deleteError, deleted } =
    useDeleteComment(comment_id);
  if (deleted) {
    return (
      <section className={commentCard}>
        <p>comment deleted</p>
      </section>
    );
  }
  return (
    <section className={commentCard}>
      <section className={commentCardHeader}>
        <h4>{author}</h4>
        <p>Score: {votes}</p>
      </section>
      <p className={commentBody}>{body}</p>
      <p className={postAge}>{age}</p>
      <section className={deleteButton}>
        {deleteError ? deleteError : ""}
        {userIsAuthor ? (
          <button onClick={handleDeleteCommentClick}>delete my comment</button>
        ) : (
          <p></p>
        )}
      </section>
    </section>
  );
};
