import "tailwindcss/tailwind.css";
import React from "react";
import CartButton from "checkout/CartButton";

const Header = () => {
  return (
    <div className=" p-5 bg-blue-500 flex justify-between">
      <p>Header</p>
      <CartButton />
    </div>
  );
};

export default Header;
