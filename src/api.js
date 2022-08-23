export const fetchReviews = () => {
  return fetch("https://nc-games-portfolio.herokuapp.com/api/reviews").then(
    (res) => {
      return res.json();
    }
  );
};
