import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { addComment } from "../api";

export const useNewComment = (review_id) => {
  const { user } = useContext(UserContext);
  const { username } = user;
  const [addedComment, setAddedComment] = useState(null);
  const [commentError, setCommentError] = useState(null);
  const handleNewCommentSubmit = (event) => {
    event.preventDefault();
    setCommentError(null);
    const body = event.target[0].value;
    setAddedComment({
      body,
      votes: 0,
      author: username,
    });

    addComment(review_id, username, body).catch(() => {
      setCommentError("Something went wrong, please try again");
    });
  };
  return { handleNewCommentSubmit, addedComment, commentError };
};
