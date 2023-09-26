import "./input-form.styles.scss";

const Inputform = (props) => {
  const { type, placeholder, label, onChangeHandler, name } = props;
  console.log("Inputform", type);
  return (
    <div className="input-container">
      <input
        placeholder={placeholder}
        onChange={onChangeHandler}
        className="input-field"
        type={type}
        name={name}
      />
      <label htmlFor="input-field" className="input-label">
        {label}
      </label>
      <span className="input-highlight"></span>
    </div>
  );
};

export default Inputform;
