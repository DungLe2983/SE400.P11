import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, count = 12 }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <ProductCard key={index} product={products[index]} />
      ))}
    </>
  );
};

export default ProductList;
