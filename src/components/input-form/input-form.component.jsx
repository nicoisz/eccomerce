import "./input-form.styles.scss";

const Inputform = ({ label, ...otherProps }) => {
  return (
    <div className="input-container">
      <input className="input-field" {...otherProps} />
      <label htmlFor="input-field" className="input-label">
        {label}
      </label>
      <span className="input-highlight"></span>
    </div>
  );
};

export default Inputform;
