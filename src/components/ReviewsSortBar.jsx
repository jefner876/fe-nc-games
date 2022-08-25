import styles from "../modules/Reviews.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
const { reviewsHeader, categoryDropdown } = styles;

export const ReviewsSortBar = ({ categories, sortByOptions, orderOptions }) => {
  const navigate = useNavigate();

  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { sortby, order } = Object.fromEntries([...searchParams.entries()]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    navigate(
      `/reviews${category === "all" ? "" : "/" + category}${
        sortby ? "?sortby=" + sortby : ""
      }${order && !sortby ? "?order=" + order : ""}${
        order && sortby ? "&order=" + order : ""
      }`
    );
  };

  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;

    navigate(
      `/reviews${
        category === "all" || !category ? "" : "/" + category
      }?sortby=${newSortBy}${order ? "&order=" + order : ""}`
    );
  };
  const handleOrderChange = (event) => {
    const newOrder = event.target.value;

    navigate(
      `/reviews${category === "all" ? "" : "/" + category}${
        sortby ? "?sortby=" + sortby : ""
      }${!sortby ? "?order=" + newOrder : ""}${
        sortby ? "&order=" + newOrder : ""
      }`
    );
  };

  return (
    <section className={reviewsHeader}>
      <h2>Reviews</h2>
      <section className="category-dropdown-section">
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
      <section className="sortby-dropdown-section">
        <label htmlFor="sort-by">Sort by: </label>
        <select
          className={categoryDropdown}
          name="sort-by"
          id="sort-by"
          onChange={handleSortByChange}
          defaultValue={category}
        >
          {sortByOptions.map((sortByOption) => {
            return (
              <option
                className={categoryDropdown}
                key={sortByOption}
                value={sortByOption}
              >
                {sortByOption.replace(/_/g, " ")}
              </option>
            );
          })}
        </select>
      </section>
      <section className="order-dropdown-section">
        <label htmlFor="order">Order: </label>
        <select
          className={categoryDropdown}
          name="order"
          id="order"
          onChange={handleOrderChange}
          defaultValue={category}
        >
          {orderOptions.map((order) => {
            return (
              <option
                className={categoryDropdown}
                key={order.server}
                value={order.server}
              >
                {order.screen}
              </option>
            );
          })}
        </select>
      </section>
    </section>
  );
};
