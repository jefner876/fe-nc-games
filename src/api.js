import axios from "axios";

const api = "https://nc-games-portfolio.herokuapp.com/api";

export const fetchCategories = () => {
  return axios.get(`${api}/categories`).then(({ data: categories }) => {
    return categories;
  });
};

export const fetchCommentsByReviewID = (review_id) => {
  return axios
    .get(`${api}/reviews/${review_id}/comments`)
    .then(({ data: comments }) => {
      return comments;
    });
};

export const fetchReviewById = (review_id) => {
  return axios.get(`${api}/reviews/${review_id}`).then(({ data: review }) => {
    return review;
  });
};

export const fetchReviews = (category) => {
  let queryString = `${api}/reviews`;
  if (category) queryString += `?category=${category}`;

  return axios.get(queryString).then(({ data: reviews }) => {
    return reviews;
  });
};

export const increaseScore = (review_id) => {
  return axios.patch(`${api}/reviews/${review_id}`, { inc_votes: 1 });
};