import "./form-btn.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  default: "default",
};
const FormButton = (props) => {
  const { textButton, buttonType, ...otherProps } = props;
  return (
    <button
      className={`form-button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      <span>{textButton}</span>
    </button>
  );
};

export default FormButton;
