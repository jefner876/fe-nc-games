export const fetchReviews = (category) => {
  let queryString = "https://nc-games-portfolio.herokuapp.com/api/reviews";
  if (category) queryString += `?category=${category}`;

  return fetch(queryString).then((res) => {
    return res.json();
  });
};

export const fetchCategories = () => {
  return fetch("https://nc-games-portfolio.herokuapp.com/api/categories").then(
    (res) => {
      return res.json();
    }
  );
};

export const fetchReviewById = (id) => {
  return fetch(
    `https://nc-games-portfolio.herokuapp.com/api/reviews/${id}`
  ).then((res) => {
    return res.json();
  });
};
