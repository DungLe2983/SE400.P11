import React from 'react';

const CartButton = () => {
    const hanldeCartClick = () => {
        alert('cart click!');
    };

    return (
        <button onClick={hanldeCartClick}>
            <i className='ri-shopping-cart-2-fill text-gray-700 text-xl '></i>
        </button>
    );
};

export default CartButton;
