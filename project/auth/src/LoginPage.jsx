import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { userState, tokenState } from "host/recoil/store";

import Header from "home/Header";
import Footer from "home/Footer";
import { login } from "./service/loginService";

const LoginPage = () => {
  const [user, setUser] = useRecoilState(userState);

  // const user = useRecoilValue(userState);
  const navigate = useNavigate();

  console.log("user", user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("form submit: ", formData);
    try {
      const data = await login(formData.email, formData.password);
      // console.log("data: ", data);
      localStorage.setItem("shosingToken", data.token);
      // setUser(data.token);
      setUser({ token: data.token });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("user", user);
  return (
    <>
      <Header />
      <div className='container mx-auto my-24'>
        {/* Login */}
        <div className='flex justify-center items-center mb-6'>
          <h2 className='text-4xl font-bold'>Login</h2>
        </div>

        {/* Form */}
        <form className='max-w-96 mx-auto' onSubmit={handleFormSubmit}>
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Email
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
