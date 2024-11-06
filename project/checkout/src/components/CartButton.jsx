import React from "react";
import { useNavigate } from "react-router-dom";
const CartButton = () => {
  const navigate = useNavigate();

  const hanldeCartClick = () => {
    // alert("cart click!");
    navigate("/cart");
  };

  return (
    <button onClick={hanldeCartClick}>
      <i className="ri-shopping-cart-2-fill text-gray-700 text-xl "></i>
    </button>
  );
};

export default CartButton;
