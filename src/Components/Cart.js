import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart({ cart, handleRemoveFromCart }) {
  const [cartTotal, setCartTotal] = useState(0);
  console.log("comp: ", cart);
  // Render items
  const renderCartItems = () => {
    console.log("FUNC: ", cart);
    return cart.map((item, index) => (
      <CartItem
        key={index}
        item={item}
        handleRemoveFromCart={handleRemoveFromCart}
        index={index}
      />
    ));
  };

  useEffect(() => {
    console.log("RUN EFFECT!", cart);

    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.price);
    });
    setCartTotal(total);
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.length !== 0 && (
        <>
          <div className="cart-list-container">
            Cart
            {renderCartItems()}
          </div>
          <div className="cart-summary-container">
            <CartSummary cartTotal={cartTotal} cart={cart} />
          </div>
        </>
      )}
      {cart.length === 0 && <div>Cart is empty!</div>}
    </div>
  );
}

export default Cart;
