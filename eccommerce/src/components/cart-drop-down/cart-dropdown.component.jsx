import "./cart-dropdown.styles.scss";
import Button from "../buttons/button/button.component";
const CartDropDown = (props) => {
  console.log("CartDropDown", props);
  return (
    <div className="cart-dropdown-container" hidden>
      <div className="cart-items"></div>
      <Button textButton="Go to Checkout"></Button>
    </div>
  );
};

export default CartDropDown;
