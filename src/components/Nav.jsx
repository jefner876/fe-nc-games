import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> {" | "}
      <Link to="/reviews">All Reviews</Link>
    </nav>
  );
};
