const App = () => {
  const subtitle = "Shop Now";
  const categories = [
    {
      id: 1,
      title: "Hats",
      subtitle: subtitle,
    },
    {
      id: 3,
      title: "Jackets",
      subtitle: subtitle,
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, subtitle }) => (
        <div className="category-container">
          {/*image*/}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
