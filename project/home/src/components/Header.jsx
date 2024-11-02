import 'tailwindcss/tailwind.css';
import React from 'react';
import CartButton from 'checkout/CartButton';
import { navigation } from '../constants/navigation';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto '>
            <header className='fixed top-0 w-full h-16 bg-transparent shadow-lg z-40 container mx-auto  px-16  '>
                <div className='  flex items-center h-full'>
                    <Link to={'/'}>
                        <p className='font-bold text-2xl'>Shosing</p>
                    </Link>

                    {/* Navigation Links */}
                    <nav className='hidden lg:flex items-center ml-8 gap-4'>
                        {navigation.map((nav, index) => {
                            return (
                                <div key={nav.label}>
                                    <NavLink
                                        key={nav.label}
                                        to={nav.href}
                                        className={({ isActive }) =>
                                            `hover:font-bold  px-2 ${
                                                isActive && ' font-semibold'
                                            }`
                                        }
                                    >
                                        {nav.label}
                                    </NavLink>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Search and Cart Section */}
                    <div className='ml-auto flex items-center gap-8'>
                        <form className='flex items-center gap-1 relative'>
                            <input
                                type='text'
                                placeholder='Search...'
                                className='bg-transparent px-4 py-2 outline-none border border-gray-300 rounded hidden lg:block '
                            />
                            <Link
                                to={'/search'}
                                className='absolute right-0 mr-2'
                            >
                                <i className='ri-search-line text-gray-700 text-xl'></i>
                            </Link>
                        </form>
                        <button>
                            <CartButton />
                        </button>

                        {/* Login Button */}
                        <Link
                            to={'/login'}
                            type='button'
                            data-collapse-toggle='navbar-search'
                            aria-controls='navbar-search'
                            aria-expanded='false'
                            className='md:order-3 text-blue-600 hover:text-blue-800 hover:scale-105 transition-all font-bold ml-0 md:ml-4 px-4 md:px-6 focus:outline-none bg-blue-100 border border-blue-300 rounded-lg text-xs md:text-sm p-2.5'
                        >
                            Login
                            <span className='sr-only'>Login</span>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
