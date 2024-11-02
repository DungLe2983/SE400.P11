import React from "react";

const Footer = () => {
  return (
      <footer className='bg-white mt-20 py-10 border-t border-gray-200 '>
          <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
              {/* Section 1: Company Info */}
              <div>
                  <h2 className='font-bold text-2xl text-gray-900 mb-4'>
                      Shosing
                  </h2>
                  <p className='text-gray-600 mb-2 font-semibold'>Address</p>
                  <p className='text-gray-500 mb-4'>
                      2118 Thornridge Cir. Syracuse, Connecticut 35624
                  </p>
                  <p className='text-gray-600 mb-2'>Email</p>
                  <p className='text-gray-500 mb-4'>Shosing@example.com</p>
                  <p className='text-gray-600 mb-2'>Phone Number</p>
                  <p className='text-gray-500'>+321 4356 2212</p>
              </div>

              {/* Section 2: Menu */}
              <div>
                  <h3 className='font-semibold text-gray-600 mb-4 ml-8'>
                      Menu
                  </h3>
                  <ul className='space-y-2 ml-8'>
                      <li>
                          <a
                              href='/'
                              className='text-gray-500 hover:text-gray-900'
                          >
                              Home
                          </a>
                      </li>
                      <li>
                          <a
                              href='/shop'
                              className='text-gray-500 hover:text-gray-900'
                          >
                              Shop
                          </a>
                      </li>
                  </ul>
              </div>

              {/* Section 3: Quick Links */}
              <div>
                  <h3 className='font-semibold text-gray-600 mb-4'>
                      Quick Links
                  </h3>
                  <ul className='space-y-2'>
                      <li>
                          <a
                              href='#'
                              className='text-gray-500 hover:text-gray-900'
                          >
                              Login
                          </a>
                      </li>
                      <li>
                          <a
                              href='#'
                              className='text-gray-500 hover:text-gray-900'
                          >
                              Register
                          </a>
                      </li>
                      <li>
                          <a
                              href='#'
                              className='text-gray-500 hover:text-gray-900'
                          >
                              My Cart
                          </a>
                      </li>
                  </ul>
              </div>

              {/* Section 4: Stay in Touch */}
              <div>
                  <h3 className='font-semibold text-gray-600 mb-4'>
                      Let’s Stay in Touch
                  </h3>
                  <div className='flex items-center space-x-2 mb-4'>
                      <input
                          type='email'
                          placeholder='Enter Your Email Address'
                          className='w-full px-4 py-2 bg-gray-100 rounded-full text-sm outline-none border border-gray-300'
                      />
                      <button className='px-4 py-2 bg-gray-900 text-white rounded-full text-sm'>
                          Subscribe
                      </button>
                  </div>
                  <p className='text-gray-600 font-semibold mb-2'>
                      Follow our Social
                  </p>
                  <div className='flex space-x-4'>
                      <a href='/' className='text-gray-500 hover:text-gray-900'>
                          <i className='ri-facebook-fill text-xl'></i>
                      </a>
                      <a href='/' className='text-gray-500 hover:text-gray-900'>
                          <i className='ri-instagram-fill text-xl'></i>
                      </a>
                      <a href='/' className='text-gray-500 hover:text-gray-900'>
                          <i className='ri-whatsapp-fill text-xl'></i>
                      </a>
                  </div>
              </div>
          </div>
          <div className='container mx-auto px-6 mt-8 text-center text-gray-400 text-sm'>
              Copyright Shosing 2024 All Right Reserved
          </div>
      </footer>
  );
};

export default Footer;
