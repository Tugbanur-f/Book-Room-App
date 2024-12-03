import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const total = location.state?.total || 0;

  return (
    <div className="checkout-page">
      <h1>Payment</h1>
      <h3>Total Price: ${total}</h3>
      <p>Please create an account to proceed with the payment.</p>
      <button onClick={() => alert("Create an account!")}>
        Create an Account
      </button>
    </div>
  );
};

export default CheckoutPage;
