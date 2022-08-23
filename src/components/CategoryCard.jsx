import { Link } from "react-router-dom";
export const CategoryCard = ({ category }) => {
  const { description, slug } = category;

  return (
    <section>
      <Link to={`/reviews/${slug}`}>
        <h3>{slug}</h3>
        <p>{description}</p>
        <img
          src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          alt=""
        />
      </Link>
    </section>
  );
};
