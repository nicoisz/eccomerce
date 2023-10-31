import CartItem from "../cart-item/cart-item.component";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";

const CheckoutTable = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [value, setValue] = useState(0);
  //   const handleDeleteItem = (item) => deleteItemToCart(item);

  //   const deleteItemToCart = ({ item }) => {
  //     const newCartItems = cartItems.filter((item) => item.id !== cartItems.id);
  //     setCartItems(newCartItems);
  //   };
  let result = 0;
  const increaseBy = (valueFromClick) => {
    const result = value + valueFromClick;
    setValue(result);
  };

  return (
    <div className="table-container">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <>
            <h1>
              {cartItem.name}
              {cartItem.id}
            </h1>
            {value}
            <button onClick={() => increaseBy(+1)}>+</button>
            <button onClick={() => increaseBy(-1)}>-</button>
          </>
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
  );
};

export default CheckoutTable;
