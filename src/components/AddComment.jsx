import { useNewComment } from "../hooks/useNewComment";
import { CommentCard } from "./CommentCard";

export const AddComment = ({ review_id }) => {
  const { handleNewCommentSubmit, addedComment, commentError } =
    useNewComment(review_id);
  if (!addedComment) {
    return (
      <section>
        <form action="" method="post" onSubmit={handleNewCommentSubmit}>
          <input type="text" />
          <button>Submit</button>
        </form>
      </section>
    );
  }
  if (commentError) {
    return (
      <section>
        <form action="" method="post" onSubmit={handleNewCommentSubmit}>
          <input type="text" />
          <button>Submit</button>
        </form>
        <p>{commentError}</p>
      </section>
    );
  }

  return (
    <section>
      <form action="" method="post" onSubmit={handleNewCommentSubmit}>
        <input type="text" />
        <button>Submit</button>
      </form>
      <CommentCard comment={addedComment} />
    </section>
  );
};
