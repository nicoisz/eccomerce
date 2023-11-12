import "./directory-items.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container card ">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
