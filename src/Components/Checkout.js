import React from "react";
import useCheckoutForm from "../Hooks/useCheckoutForm";
import validateCheckout from "../services/validateCheckout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { clearCart } from "../services/cart";

function Checkout({ cart, setCart }) {
  let history = useHistory();

  const submitCheckout = async (checkoutValues) => {
    console.log("SUBMIT: ", checkoutValues);
    //  clear cart
    await clearCart();
    //  setCart(cartRes);
    //  console.log("CART RESPONSE: ", cartRes);
  };

  const handleCheckoutComplete = () => {
    setCart([]);
    history.push("/");
  };

  const {
    checkoutValues,
    checkoutErrors,
    handleCheckoutChange,
    handleCheckoutSubmit,
    generateInvoice,
  } = useCheckoutForm(validateCheckout, submitCheckout);

  const renderCheckoutForm = () => {
    return (
      <div>
        <form className="checkout-form">
          <label>First name:</label>
          <input type="text" onChange={handleCheckoutChange} name="firstName" />
          <label>Last name:</label>
          <input type="text" onChange={handleCheckoutChange} name="lastName" />
          <label>Address:</label>
          <input type="text" onChange={handleCheckoutChange} name="address" />
          <label>Contact number:</label>
          <input
            type="text"
            onChange={handleCheckoutChange}
            name="contactNumber"
          />
        </form>
        <button onClick={handleCheckoutSubmit}>Submit</button>
        {checkoutErrors.firstName && <p>{checkoutErrors.firstName}</p>}
        {checkoutErrors.lastName && <p>{checkoutErrors.lastName}</p>}
        {checkoutErrors.address && <p>{checkoutErrors.address}</p>}
        {checkoutErrors.contactNumber && <p>{checkoutErrors.contactNumber}</p>}
      </div>
    );
  };

  const renderCheckoutInvoice = () => {
    console.log("invoice", generateInvoice);
    return (
      <>
        <p>Thank you for you purchase!</p>
        <p>Invoice:</p>
        <p>
          <strong>First name:</strong> {checkoutValues.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {checkoutValues.lastName}
        </p>
        <p>
          <strong>Address:</strong> {checkoutValues.address}
        </p>
        <p>
          <strong>Contact number:</strong> {checkoutValues.contactNumber}
        </p>
        <button onClick={handleCheckoutComplete}>Confirm</button>
      </>
    );
  };

  return (
    <>
      {!generateInvoice && renderCheckoutForm()}
      {generateInvoice && renderCheckoutInvoice()}
    </>
  );
}

export default Checkout;
