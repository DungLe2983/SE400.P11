import React from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-24">
        {/* Register */}
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-4xl font-bold">Register</h2>
          {/* <button className="text-gray-400 hover:text-gray-600">
            <i className="ri-close-line text-2xl" />
          </button> */}
        </div>

        {/* Form */}
        <form className="max-w-96 mx-auto">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="shosing@123"
              className="w-full p-4 mb-4 border border-slate-500 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="shosing@gmail.com"
              className="w-full p-4 mb-4 border border-slate-500 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="yourpassword"
              className="w-full p-4 mb-4 border border-slate-500 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#100D22] text-white py-2 rounded-md hover:scale-105 transition-colors mb-4"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Already account?{" "}
            <Link
              to="/auth/login"
              className="text-slate-700 hover:font-bold underline"
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
