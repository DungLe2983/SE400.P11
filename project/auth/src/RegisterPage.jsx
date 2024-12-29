import React, { useState } from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../src/service/registerService"; // Giả sử bạn đã tạo registerService ở trên

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password) {
      setError("Please fill in all fields");
      return;
    }

    const userData = { name, email, phone, password, role };

    try {
      await register(userData);
      navigate("/auth/login");
    } catch (err) {
      setError(err || "Registration failed");
    }
  };

  return (
    <>
      <Header />
      <div className='container mx-auto my-24'>
        {/* Register */}
        <div className='flex justify-center items-center mb-6'>
          <h2 className='text-4xl font-bold'>Register</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className='max-w-96 mx-auto'>
          {/* Name */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Name
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
              className='w-full p-4 mb-4 border border-slate-500 rounded-lg'
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='example@gmail.com'
              className='w-full p-4 mb-4 border border-slate-500 rounded-lg'
            />
          </div>

          {/* Phone */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Phone
            </label>
            <input
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='0123456789'
              className='w-full p-4 mb-4 border border-slate-500 rounded-lg'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm font-semibold text-gray-700 mb-1'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='********'
              className='w-full p-4 mb-4 border border-slate-500 rounded-lg'
            />
          </div>

          {/* Error Message */}
          {error && <div className='text-red-500 text-sm mb-4'>{error}</div>}

          <button
            type='submit'
            className='w-full bg-[#100D22] text-white py-2 rounded-md hover:scale-105 transition-colors mb-4'
          >
            Register
          </button>

          <p className='text-center text-sm text-gray-600'>
            Already have an account?{" "}
            <Link
              to='/auth/login'
              className='text-slate-700 hover:font-bold underline'
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
