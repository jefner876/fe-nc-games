import { useComments } from "../hooks/useComments";
import { CommentCard } from "./CommentCard";
import { ErrorHandling } from "./ErrorHandling";

export const Comments = ({ review_id }) => {
  const { error, comments, isLoading } = useComments(review_id);

  if (error) return <ErrorHandling error={error} />;
  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
};
