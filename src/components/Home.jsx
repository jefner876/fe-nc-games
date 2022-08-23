import { CategoryCard } from "./CategoryCard";
import styles from "../modules/Home.module.css";
const { categoriesWrapper } = styles;

export const Home = ({ categories }) => {
  return (
    <main className={categoriesWrapper}>
      <CategoryCard key="all" category={{}} />
      {categories.map((category) => {
        return <CategoryCard key={category.slug} category={category} />;
      })}
    </main>
  );
};
