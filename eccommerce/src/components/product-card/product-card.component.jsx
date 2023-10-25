import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../buttons/button/button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;

  const { cartItems, addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container" key={id}>
      <img alt={`${name}`} src={imageUrl} />
      <div className="footer">
        <span className="'name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addProductToCart}
        buttonType="inverted"
        textButton="Add to Card"
      ></Button>
    </div>
  );
};

export default ProductCard;
