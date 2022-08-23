import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">Categories</Link> {" | "}
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
};
