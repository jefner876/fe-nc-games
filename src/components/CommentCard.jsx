export const CommentCard = ({ comment }) => {
  const { comment_id, body, votes, author } = comment;
  return (
    <section>
      <p>{author}</p>
      <p>{body}</p>
      <p>{votes}</p>
    </section>
  );
};
