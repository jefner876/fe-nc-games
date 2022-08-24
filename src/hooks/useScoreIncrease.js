import { useState } from "react";
import axios from "axios";

const increaseScore = (review_id) => {
  return axios.patch(
    `https://nc-games-portfolio.herokuapp.com/api/reviews/${review_id}`,
    { inc_votes: 1 }
  );
};

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
