import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { ReviewCard } from "./ReviewCard";
import styles from "../modules/Reviews.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorHandling } from "./ErrorHandling";
const { reviewsWrapper, reviewsHeader, categoryDropdown } = styles;

export const Reviews = ({ categories }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { category } = useParams();
  const categoryNames = categories.map((category) => {
    return category.slug;
  });

  let verifiedCategory = null;
  let errorMsg = null;

  if (category && !categoryNames.includes(category)) {
    errorMsg = (
      <ErrorHandling error={{ status: 404, msg: "Category not found" }} />
    );
  } else {
    verifiedCategory = category;
  }

  useEffect(() => {
    fetchReviews(verifiedCategory)
      .then(({ reviews }) => {
        setIsLoading(true);
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [verifiedCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    navigate(`/reviews${category === "all" ? "" : "/" + category}`);
  };
  if (error)
    return (
      <p>
        Status:{error.response.status} <br></br> {error.response.data.msg}
      </p>
    );
  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <section className={reviewsHeader}>
        <h2>Reviews</h2>
        <label htmlFor="category">Category: </label>
        <select
          className={categoryDropdown}
          name="category"
          id="category"
          onChange={handleCategoryChange}
          defaultValue={category}
        >
          <option className={categoryDropdown} key="all" value="all">
            All
          </option>
          {categories.map((category) => {
            return (
              <option
                className={categoryDropdown}
                key={category.slug}
                value={category.slug}
              >
                {category.slug}
              </option>
            );
          })}
        </select>
      </section>
      <section className={reviewsWrapper}>
        {category && !categoryNames.includes(category)
          ? errorMsg
          : reviews.map((review) => {
              return (
                <ReviewCard key={review.review_id} review={review}></ReviewCard>
              );
            })}
      </section>
    </main>
  );
};
