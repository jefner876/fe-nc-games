import axios from "axios";

export const fetchReviews = (category) => {
  let queryString = "https://nc-games-portfolio.herokuapp.com/api/reviews";
  if (category) queryString += `?category=${category}`;

  return axios.get(queryString).then(({ data: reviews }) => {
    return reviews;
  });
};

export const fetchCategories = () => {
  return axios
    .get("https://nc-games-portfolio.herokuapp.com/api/categories")
    .then(({ data: categories }) => {
      return categories;
    });
};

export const fetchReviewById = (id) => {
  return axios
    .get(`https://nc-games-portfolio.herokuapp.com/api/reviews/${id}`)
    .then(({ data: review }) => {
      return review;
    });
};
