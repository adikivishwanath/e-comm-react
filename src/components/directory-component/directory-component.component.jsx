import CategoryItem from "../category-item/category-item.component";
import "./directory-component.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((eachCategory) => (
        <CategoryItem eachCategory={eachCategory} key={eachCategory.id} />
      ))}
    </div>
  );
};

export default Directory;
