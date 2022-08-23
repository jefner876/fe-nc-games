import { CategoryCard } from "./CategoryCard";

export const Home = ({ categories }) => {
  return (
    <main>
      {categories.map((category) => {
        return <CategoryCard key={category.slug} category={category} />;
      })}
    </main>
  );
};
