import React, { useState } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import Header from "home/Header";
import Footer from "home/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const categories = [
    { name: "Shoes (321)", count: 321 },
    { name: "Clothing (75)", count: 75 },
    { name: "Accessories (135)", count: 135 },
  ];

  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "Gray", class: "bg-gray-400" },
    { name: "Pink", class: "bg-pink-300" },
    { name: "Rose", class: "bg-rose-400" },
    { name: "Blue", class: "bg-sky-300" },
    { name: "Purple", class: "bg-purple-400" },
    { name: "Green", class: "bg-green-200" },
  ];

  return (
    <>
      <Header />
      <div className=" container mx-auto px-4 pb-8 pt-24">
        {/* Link */}
        <div className="flex items-center space-x-2 text-sm mb-8">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <span>/</span>
          <a href="/products" className="text-gray-600 hover:text-gray-900">
            Shop
          </a>
          <span>/</span>
          <span className="text-gray-900">All Products</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">All Products</h1>
          <button className="flex items-center text-sm border px-4 py-2 rounded-lg">
            <span>Sort By</span>
            <i class="ri-arrow-down-s-line text-lg"></i>
          </button>
        </div>

        {/* Filter */}
        <div className="grid grid-cols-12 gap-8">
          <Filter categories={categories} colors={colors} />

          {/* Product Listing */}
          <div className="col-span-9 grid grid-cols-3 gap-6">
            <ProductList products={products} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
