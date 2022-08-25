import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useScore } from "../hooks/useScore";
import styles from "../modules/ReviewPage.module.css";
const { scoreSection } = styles;

export const AddVote = ({ review_id, owner, votes }) => {
  const { handleScoreClick, clickedScore, scoreError } = useScore(review_id);
  const { user } = useContext(UserContext);
  const userIsOwner = user.username === owner;

  if (userIsOwner) {
    return (
      <section className={scoreSection}>
        <p>Score: {votes}</p>
      </section>
    );
  }
  return (
    <section className={scoreSection}>
      <p>Score: {votes + clickedScore}</p>
      <button onClick={handleScoreClick}>➕</button>
      <p>{scoreError}</p>
    </section>
  );
};
