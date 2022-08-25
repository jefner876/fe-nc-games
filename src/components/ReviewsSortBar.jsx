import styles from "../modules/Reviews.module.css";
import { useNavigate, useParams } from "react-router-dom";
const { reviewsHeader, categoryDropdown } = styles;

export const ReviewsSortBar = ({ categories }) => {
  const navigate = useNavigate();
  const { category } = useParams();
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    navigate(`/reviews${category === "all" ? "" : "/" + category}`);
  };

  return (
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
  );
};
