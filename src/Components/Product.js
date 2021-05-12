import React from "react";

function Product({ product, handleAddToCart }) {
  return (
    <div className="product-item">
      <img className="product-img" src={product.img} alt={product.title} />
      <h5>{product.title}</h5>
      <span>Brand: {product.brand}</span>
      <br />
      <span>{product.price}</span>
      <button onClick={() => handleAddToCart(product)}>Add</button>
    </div>
  );
}

export default Product;
