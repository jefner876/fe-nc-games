import { Link } from "react-router-dom";
import styles from "../modules/CategoryCard.module.css";
import icons from "../icons";

const {
  categoryHeading,
  categoryCard,
  categoryImg,
  categoryText,
  categoryLinks,
} = styles;

export const CategoryCard = ({ category }) => {
  const { description, slug } = category;

  return (
    <section className={categoryCard}>
      <Link className={categoryLinks} to={`/reviews${slug ? "/" + slug : ""}`}>
        <h3 className={categoryHeading}>{slug || "All"}</h3>
        <img
          className={categoryImg}
          src={!slug ? icons.all : icons[slug] || icons.placeholder}
          alt=""
        />
      </Link>
      <p className={categoryText}>{description || "All categories"}</p>
    </section>
  );
};
