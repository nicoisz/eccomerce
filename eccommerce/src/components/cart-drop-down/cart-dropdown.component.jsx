import "./cart-dropdown.styles.scss";
import Button from "../buttons/button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = (props) => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
    navigate("/checkout");
  };

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
      <Button
        textButton={"Go to Checkout"}
        buttonType="inverted"
        onClick={handleClick}
      ></Button>
    </div>
  );
};

export default CartDropDown;
