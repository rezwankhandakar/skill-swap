
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-medium transition ${
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
          }`
        }
      >
        Home
      </NavLink>
     
      <NavLink
        to="/myProfile"
        className={({ isActive }) =>
          `font-medium transition ${
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
          }`
        }
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Brand */}
      <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-1">
        Skill<span className="text-orange-500">Swap</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">{navLinks}</div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Avatar with tooltip on left */}
            <Link to="/myProfile">
            <div className="relative group">
              <img
                src={user.photoURL || "https://i.ibb.co/2FxYp8v/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover hover:scale-105 transition-transform cursor-pointer"
              />
              <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {user.displayName || "No Name"}
              </span>
            </div>
            </Link>

            <button
              onClick={logOut}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/login"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
