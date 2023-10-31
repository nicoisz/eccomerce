import CheckoutTable from "../../components/checkout-table/checkout-table.component";
import "./checkout.styles.scss";

const Checkout = () => {
  return (
    <div className="authentication-container">
      <div className="row">
        <CheckoutTable></CheckoutTable>
      </div>
    </div>
  );
};

export default Checkout;
