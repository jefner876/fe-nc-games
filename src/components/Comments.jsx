import { useComments } from "../hooks/useComments";
import { CommentCard } from "./CommentCard";
import { ErrorHandling } from "./ErrorHandling";
import styles from "../modules/Comments.module.css";
import { AddComment } from "./AddComment";
const { commentSectionHeader } = styles;

export const Comments = ({ review_id }) => {
  const { error, comments, isLoading } = useComments(review_id);

  if (error) return <ErrorHandling error={error} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h3 className={commentSectionHeader}>Comments</h3>
      <p> {comments.length === 0 ? "Nobody has commented yet" : ""}</p>
      <AddComment />
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};
