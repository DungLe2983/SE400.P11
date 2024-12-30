import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import ProductCard from "./components/ProductCard";
import { searchProducts } from "../src/service/productService";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get("keyword");
    if (keyword) {
      setSearchKeyword(keyword);
      fetchProducts(keyword);
    }
  }, [location]);


  const fetchProducts = async (keyword) => {
    const results = await searchProducts(keyword);
    console.log("Fetching products==", results);
    setProducts(results.products);
  };

  return (
    <>
      <Header />
      <div>
        <div className='py-20'>
          <div className='container mx-auto'>
            <div className='my-10'>
              <h3 className='text-xl text-gray-600'>
                Search Result for:{" "}
                <span className='font-semibold text-black'>
                  {searchKeyword}
                </span>
              </h3>
            </div>
            <div className='col-span-9 grid grid-cols-4 gap-6'>
              {products.length === 0 ? (
                <p className='text-xl text-gray-600'>
                  No products found.
                </p>
              ) : (
                products?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
