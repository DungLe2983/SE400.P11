import React from "react";

const CartButton = () => {
  const hanldeCartClick = () => {
    alert("cart click!");
  };

  return <button onClick={hanldeCartClick}>Cart</button>;
};

export default CartButton;
