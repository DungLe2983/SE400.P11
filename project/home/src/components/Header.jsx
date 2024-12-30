// import "tailwindcss/tailwind.css";
// import React, { useEffect, useState } from "react";
// import CartButton from "checkout/CartButton";
// import { navigation } from "../constants/navigation";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem("shosingToken");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("shosingToken");

//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <div className='bg-white shadow-lg h-16 fixed top-0 w-full z-50'>
//       <header className='container mx-auto flex h-full justify-between items-center'>
//         <Link to={"/"}>
//           <p className='font-bold text-2xl'>Shosing</p>
//         </Link>

//         <nav className='flex items-center ml-8 gap-4'>
//           {navigation.map((nav, index) => {
//             return (
//               <div key={nav.label}>
//                 <NavLink
//                   key={nav.label}
//                   to={nav.href}
//                   className={({ isActive }) =>
//                     `hover:font-bold px-2 ${isActive && " font-semibold"}`
//                   }
//                 >
//                   {nav.label}
//                 </NavLink>
//               </div>
//             );
//           })}
//         </nav>

//         <div className='ml-auto flex items-center gap-8'>
//           <form className='flex items-center gap-1 relative'>
//             <input
//               type='text'
//               placeholder='Search...'
//               className='opacity-60 w-96 px-4 py-2 outline-none border border-slate-500 rounded block'
//             />
//             <Link to={"/search"} className='absolute right-0 mr-2'>
//               <i className='ri-search-line text-gray-700 text-xl'></i>
//             </Link>
//           </form>
//           <div>
//             <CartButton />
//           </div>

//           {isLoggedIn ? (
//             <div className='flex gap-2'>
//               <Link
//                 className=' cursor-pointer hover:text-gray-400'
//                 to={"/auth/profile"}
//               >
//                 Tài khoản
//               </Link>
//               <span>|</span>
//               <button
//                 className=' cursor-pointer hover:text-gray-400'
//                 onClick={handleLogout}
//               >
//                 Đăng xuất
//               </button>
//             </div>
//           ) : (
//             <Link
//               to={"/auth/login"}
//               className='md:order-3 text-white hover:scale-105 transition-all font-bold ml-0 md:ml-4 px-4 md:px-6 focus:outline-none bg-[#100D22] rounded-lg text-xs md:text-sm p-2.5'
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import CartButton from "checkout/CartButton";
import { navigation } from "../constants/navigation";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // To store the user's search input
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("shosingToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("shosingToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to the search page with the search query as a query parameter
    if (searchQuery.trim()) {
      navigate(`/search?keyword=${searchQuery}`);
    }
  };

  return (
    <div className='bg-white shadow-lg h-16 fixed top-0 w-full z-50'>
      <header className='container mx-auto flex h-full justify-between items-center'>
        <Link to={"/"}>
          <p className='font-bold text-2xl'>Shosing</p>
        </Link>

        <nav className='flex items-center ml-8 gap-4'>
          {navigation.map((nav, index) => {
            return (
              <div key={nav.label}>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `hover:font-bold px-2 ${isActive && " font-semibold"}`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className='ml-auto flex items-center gap-8'>
          <form
            onSubmit={handleSearchSubmit}
            className='flex items-center gap-1 relative'
          >
            <input
              type='text'
              placeholder='Search...'
              className='opacity-60 w-96 px-4 py-2 outline-none border border-slate-500 rounded block'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on input change
            />
            <button type='submit' className='absolute right-0 mr-2'>
              <i className='ri-search-line text-gray-700 text-xl'></i>
            </button>
          </form>
          <div>
            <CartButton />
          </div>

          {isLoggedIn ? (
            <div className='flex gap-2'>
              <Link
                className=' cursor-pointer hover:text-gray-400'
                to={"/auth/profile"}
              >
                Tài khoản
              </Link>
              <span>|</span>
              <button
                className=' cursor-pointer hover:text-gray-400'
                onClick={handleLogout}
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link
              to={"/auth/login"}
              className='md:order-3 text-white hover:scale-105 transition-all font-bold ml-0 md:ml-4 px-4 md:px-6 focus:outline-none bg-[#100D22] rounded-lg text-xs md:text-sm p-2.5'
            >
              Login
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
