import "./button.styles.scss";
import { Link } from "react-router-dom";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  default: "default",
};
const Button = (props) => {
  const { textButton, buttonType, path, ...otherProps } = props;
  console.log("nico", props);
  return (
    <button
      className={`form-button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
      component={Link}
      to="path"
    >
      <span>{textButton}</span>
    </button>
  );
};

export default Button;
