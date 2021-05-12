import React from "react";
import { Products } from "../Products";
import Product from "./Product";

function ProductsList({ handleAddToCart }) {
  const renderProducts = () => {
    return Products.map((product) => (
      <Product
        key={product.id}
        product={product}
        handleAddToCart={handleAddToCart}
      />
    ));
  };

  console.log(Products);
  return (
    <div>
      <h4 className="products-page-title">Products</h4>
      <div className="products-container">{renderProducts()}</div>
    </div>
  );
}

export default ProductsList;
