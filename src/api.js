export const fetchReviews = () => {
  return fetch("https://nc-games-portfolio.herokuapp.com/api/reviews").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchCategories = () => {
  return fetch("https://nc-games-portfolio.herokuapp.com/api/categories").then(
    (res) => {
      return res.json();
    }
  );
};
