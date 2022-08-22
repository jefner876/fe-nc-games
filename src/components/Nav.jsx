import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> {" | "}
      <Link to="/reviews/all">All Reviews</Link>
    </nav>
  );
};
