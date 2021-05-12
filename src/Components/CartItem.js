import React from "react";

function CartItem({ item, handleRemoveFromCart, index }) {
  return (
    <div className="cart-item">
      <img className="cart-product-img" src={item.image} alt={item.title} />
      <span className="cart-item-title">{item.title}</span>
      <span className="cart-item-price">R{item.price}</span>
      <button
        onClick={() => handleRemoveFromCart(index)}
        className="cart-remove-item-btn"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
