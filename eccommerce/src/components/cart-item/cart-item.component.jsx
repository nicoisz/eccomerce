import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div>
      <h4>
        <b>{name}</b>
      </h4>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
