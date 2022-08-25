import { useState } from "react";
import { increaseScore } from "../api";

export const useScore = (review_id) => {
  const [clickedScore, setClickedScore] = useState(0);
  const [scoreError, setScoreError] = useState(null);

  const handleScoreClick = () => {
    setScoreError(null);
    setClickedScore((currclickedScore) => {
      return currclickedScore + 1;
    });
    increaseScore(review_id).catch(() => {
      setClickedScore((currclickedScore) => {
        return currclickedScore - 1;
      });
      setScoreError("Something went wrong, please try again");
    });
  };
  return { handleScoreClick, clickedScore, scoreError };
};
