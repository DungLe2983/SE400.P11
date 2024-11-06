import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white my-20 '>
            <div className='bg-white text-center'>
                <div className='flex items-center justify-center mb-4'>
                    <div className='bg-gray-200 rounded-full p-6'>
                        <i className='ri-check-line text-6xl text-gray-500'></i>
                    </div>
                </div>
                <h1 className='text-xl font-semibold text-gray-800 mb-2 mt-10'>
                    Thank you for your purchase!
                </h1>
                <p className='text-gray-600 mb-8'>
                    Your order has been successfully placed.
                </p>
                <Link
                    to={'/'}
                    className='text-center hover:scale-105 transition-all  bg-[#100D22] font-bold py-4 w-full px-8 text-white rounded-full mt-2'
                >
                    Continue shopping
                </Link>
            </div>
        </div>
    );
};

export default CheckoutSuccessPage;
