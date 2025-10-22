
// // import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // import { AuthContext } from "../Provider/AuthProvider";

// // const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext);

// //   const handleLogout = () => {
// //     logOut()
// //       .then(() => console.log("Logged out"))
// //       .catch((err) => console.error(err));
// //   };

// //   return (
// //     <div className="navbar bg-white shadow-md sticky top-0 z-50">
// //       <div className="navbar-start">
// //         <Link to="/" className="text-2xl font-bold text-blue-600">
// //           Skill<span className="text-orange-500">Swap</span>
// //         </Link>
// //       </div>

// //       <div className="navbar-center hidden lg:flex">
// //         <ul className="menu menu-horizontal px-1 text-gray-600">
// //           <li><Link to="/">Home</Link></li>
// //           <li><Link to="/skills">All Skills</Link></li>
// //           <li><Link to="/profile">My Profile</Link></li>
// //         </ul>
// //       </div>

// //       <div className="navbar-end flex items-center gap-3">
// //         {user ? (
// //           <>
// //             <div className="relative group">
// //               <img
// //                 src={user.photoURL || "https://i.ibb.co/2FxYp8v/default-avatar.png"}
// //                 alt="avatar"
// //                 className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
// //               />
// //               <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
// //                 {user.displayName || "User"}
// //               </span>
// //             </div>
// //             <button
// //               onClick={handleLogout}
// //               className="border border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
// //             >
// //               Logout
// //             </button>
// //           </>
// //         ) : (
// //           <>
// //             <Link
// //               to="/login"
// //               className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
// //             >
// //               Login
// //             </Link>
// //             <Link
// //               to="/signup"
// //               className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-50"
// //             >
// //               Signup
// //             </Link>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;



// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogout = () => {
//     logOut()
//       .then(() => console.log("Logged out"))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 py-2 flex justify-between items-center">
//       {/* Logo */}
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         Skill<span className="text-orange-500">Swap</span>
//       </Link>

//       {/* Menu */}
//       <ul className="hidden lg:flex gap-4 text-gray-600">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/skills">All Skills</Link></li>
//         <li><Link to="/profile">My Profile</Link></li>
//       </ul>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">
//         {user ? (
//           <>
//             {/* Profile Picture */}
//             <div className="relative group">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/2FxYp8v/default-avatar.png"}
//                 alt="avatar"
//                 className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                
//               />
//               <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
//                 {user.displayName || "User"}
//               </span>
//             </div>

//             {/* Logout Button */}
//             <button
//               onClick={handleLogout}
//               className="border border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-50"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl hover:bg-blue-50"
//             >
//               Signup
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
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
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 py-2 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Skill<span className="text-orange-500">Swap</span>
      </Link>

      {/* Menu */}
      <ul className="hidden lg:flex gap-4 text-gray-600">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">All Skills</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {user ? (
          <>
            {/* Profile Picture */}
            <div className="relative group">
              <img
                src={user?.photoURL?.replace("s96-c", "s128-c") || "https://i.ibb.co/2FxYp8v/default-avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
              />
              <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                {user?.displayName || "User"}
              </span>
            </div>

            {/* Logout Button */}
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
