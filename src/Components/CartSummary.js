import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CartSummary({ cartTotal, cart }) {
  const renderCartSummary = () => {
    return cart.map((item, i) => (
      <tr key={i}>
        <td>{item.title}</td>
        <td>R{item.price}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>Summary</h2>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {renderCartSummary()}
          <tr></tr>
          <tr>
            <td className="total-block">R{cartTotal}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export default CartSummary;
