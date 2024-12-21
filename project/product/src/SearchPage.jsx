import React, { useState } from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import ProductList from "./components/ProductList";
const SearchPage = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Header />
      <div>
        <div className='py-20'>
          <div className='container mx-auto'>
            <div className='my-10'>
              <h3 className='text-xl text-gray-600 '>
                Search Result for:{" "}
                <span className='font-semibold text-black'>"Jordan"</span>
              </h3>
            </div>
            <div className='col-span-9 grid grid-cols-4 gap-6'>
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
