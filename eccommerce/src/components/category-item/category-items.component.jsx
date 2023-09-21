import "./category-items.styles.scss";
const Category = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div className="category-container" key={id}>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
