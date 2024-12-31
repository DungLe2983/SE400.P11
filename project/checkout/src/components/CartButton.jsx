import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { cartItemsQuantityState } from "host/recoil/store";

const CartButton = () => {
  const navigate = useNavigate();
  const [cartItemsQuantity, setCartItemsQuantity] = useRecoilState(
    cartItemsQuantityState
  );

  const hanldeCartClick = () => {
    navigate("/cart");
  };

  return (
    <button onClick={hanldeCartClick} className="relative">
      <i className="ri-shopping-cart-2-fill text-gray-700 text-xl "></i>
      {/* <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
        {cartItemsQuantity}
      </span> */}
    </button>
  );
};

export default CartButton;
