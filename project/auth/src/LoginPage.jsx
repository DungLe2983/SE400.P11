import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { userState } from "host/recoil/store";

import Header from "home/Header";
import Footer from "home/Footer";

const LoginPage = () => {
  // const [user, setUser] = useRecoilState(userState);

  const user = useRecoilValue(userState);

  console.log("user in store: ", user);

  return (
    <>
      <Header />
      <div className='container mx-auto my-24'>
        {/* Login */}
        <div className='flex justify-center items-center mb-6'>
          <h2 className='text-4xl font-bold'>Login</h2>
        </div>

        {/* Form */}
        <form className='max-w-96 mx-auto'>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              placeholder='shosing@gmail.com'
              className='w-full p-4 mb-4 border border-slate-500 rounded-lg'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Password
            </label>
            <input
              type='password'
              placeholder='yourpassword'
              className='w-full p-4 mb-4 border border-slate-500 rounded-lg'
              autoComplete='username'
            />
          </div>

          <div className='flex items-center justify-between mb-6'>
            <div className=' flex items-center  justify-center gap-2'>
              <input type='checkbox' className='w-4 h-4' id='remember' />
              <div className='text-sm text-slate-700'>Remember me</div>
            </div>
            <button
              type='button'
              className='text-sm text-slate-700 hover:font-bold underline'
            >
              Forgot Password
            </button>
          </div>

          <button
            type='submit'
            className='w-full bg-[#100D22] text-white py-2 rounded-md hover:scale-105 transition-colors mb-4'
          >
            Login
          </button>

          <p className='text-center text-sm text-gray-600'>
            Not a member?{" "}
            <Link
              to='/auth/register'
              className='text-slate-700 hover:font-bold underline'
            >
              Register
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
