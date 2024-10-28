import React from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  return (
    <div className=" bg-white flex items-center justify-between px-6 py-2 drop-shadow-lg">
      <a className="text-xl font-medium text-black py-2" href="/">
        Ecommerce
      </a>
    </div>
  );
};

export default Header;
