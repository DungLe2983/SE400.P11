import React from "react";

const ProductCard = ({ index }) => {
  return (
    <div key={index} className="group">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img
          src="https://api.slingacademy.com/public/sample-photos/81.jpeg"
          alt="Product image"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <a href="/products/2">
        <div className=" flex justify-between gap-2">
          <div>
            <h3 className="font-medium">Nike Air Max 2021</h3>
            <p className="text-sm text-gray-600">Men's Shoes</p>
          </div>
          <p className="font-semibold mt-1">$213</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
