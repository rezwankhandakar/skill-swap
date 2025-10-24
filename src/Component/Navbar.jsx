

import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-medium transition-colors duration-300 ${
            isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>

      <NavLink
        to="/myProfile"
        className={({ isActive }) =>
          `font-medium transition-colors duration-300 ${
            isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
    
      <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-1">
        Skill<span className="text-orange-500">Swap</span>
      </Link>

      
      <div className="hidden md:flex gap-8 items-center">{navLinks}</div>

    
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none text-gray-700">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* User Section */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
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

      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-8 py-4 md:hidden gap-4 z-40">
          {navLinks}
          {user ? (
            <div className="flex flex-col w-full gap-2">
              <Link
                to="/myProfile"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={user.photoURL || "https://i.ibb.co/2FxYp8v/default-avatar.png"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-blue-500 object-cover"
                />
                <span>{user.displayName || "No Name"}</span>
              </Link>
              <button
                onClick={logOut}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full">
              <Link
                to="/login"
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition w-full"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition w-full"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
