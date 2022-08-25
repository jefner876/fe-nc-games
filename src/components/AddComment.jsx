import { useNewComment } from "../hooks/useNewComment";
import { CommentCard } from "./CommentCard";
import styles from "../modules/AddComment.module.css";
const { commentBox, submitButton } = styles;

export const AddComment = ({ review_id }) => {
  const { handleNewCommentSubmit, addedComment, commentError } =
    useNewComment(review_id);

  return (
    <section>
      <form onSubmit={handleNewCommentSubmit}>
        <label htmlFor="comment-input">Join the conversation</label>
        <textarea
          name="comment-input"
          className={commentBox}
          type="text"
          placeholder="Write your comment..."
        />
        <button className={submitButton}>Submit</button>
      </form>

      {commentError || !addedComment ? (
        <p>{commentError}</p>
      ) : (
        <CommentCard comment={addedComment} />
      )}
    </section>
  );
};
