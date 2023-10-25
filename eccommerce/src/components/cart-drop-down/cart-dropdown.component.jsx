import "./cart-dropdown.styles.scss";
import Button from "../buttons/button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropDown = (props) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container" hidden>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button textButton="Go to Checkout"></Button>
    </div>
  );
};

export default CartDropDown;
