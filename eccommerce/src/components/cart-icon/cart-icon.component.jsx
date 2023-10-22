import "./cart-icon.styles.scss";
import { useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = () => {
  const [toggle, setToggle] = useState(true);
  const onClickHandler = () => {
    console.log("clik", toggle);
  };
  return (
    <div className="cart-icon-container" onClick={onClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
