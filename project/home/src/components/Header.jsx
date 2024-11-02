import "tailwindcss/tailwind.css";
import React from "react";
import CartButton from "checkout/CartButton";
import { navigation } from "../constants/navigation";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-white shadow-lg h-16 fixed top-0 w-full">
      <header className="container mx-auto flex h-full justify-between items-center">
        <Link to={"/"}>
          <p className="font-bold text-2xl">Shosing</p>
        </Link>

        <nav className="hidden lg:flex items-center ml-8 gap-4">
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label}>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `hover:font-bold  px-2 ${isActive && " font-semibold"}`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-8">
          <form className="flex items-center gap-1 relative">
            <input
              type="text"
              placeholder="Search..."
              className=" opacity-60 w-96 px-4 py-2 outline-none border border-slate-500 rounded hidden lg:block "
            />
            <Link to={"/search"} className="absolute right-0 mr-2">
              <i className="ri-search-line text-gray-700 text-xl"></i>
            </Link>
          </form>
          <button>
            <CartButton />
          </button>

          <Link
            to={"/login"}
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:order-3 text-white hover:scale-105 transition-all font-bold ml-0 md:ml-4 px-4 md:px-6 focus:outline-none bg-[#100D22] rounded-lg text-xs md:text-sm p-2.5"
          >
            Login
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
