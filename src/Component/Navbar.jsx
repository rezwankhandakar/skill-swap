// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="navbar bg-white shadow-md sticky top-0 z-50">
//   <div className="navbar-start">
//     {/* Mobile Dropdown */}
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         <li><a href="/">Home</a></li>
//         <li><a href="/skills">All Skills</a></li>
//         <li><a href="/profile">My Profile</a></li>
//       </ul>
//     </div>

//     {/* Logo */}
//     <a href="/" className="text-2xl font-bold text-blue-600">
//       Skill<span className="text-orange-500">Swap</span>
//     </a>
//   </div>

//   {/* Desktop Menu */}
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1 text-gray-600">
//       <li><a href="/">Home</a></li>
//       <li><a href="/skills">All Skills</a></li>
//       <li><a href="/profile">My Profile</a></li>
//     </ul>
//   </div>

//   {/* Right Side */}
//   <div className="navbar-end flex items-center gap-3">
//     <a
//       href="/login"
//       className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
//     >
//       Login
//     </a>
//     <a
//       href="/signup"
//       className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-50"
//     >
//       Signup
//     </a>
//   </div>
// </div>

//   );
// };

// export default Navbar;



import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Skill<span className="text-orange-500">Swap</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-600">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">All Skills</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <div className="relative group">
              <img
                src={user.photoURL || "https://i.ibb.co/2FxYp8v/default-avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
              />
              <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                {user.displayName || "User"}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-50"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
