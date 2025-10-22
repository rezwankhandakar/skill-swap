

// // import React, { useContext, useState } from "react";
// // import { AuthContext } from "../Provider/AuthProvider";
// // import { toast } from "react-hot-toast";
// // import "animate.css";

// // const MyProfile = () => {
// //   const { user, updateUserProfile } = useContext(AuthContext);
// //   const [editMode, setEditMode] = useState(false);
// //   const [name, setName] = useState(user?.displayName || "");
// //   const [photo, setPhoto] = useState(user?.photoURL || "");

// //   const handleUpdateProfile = async (e) => {
// //     e.preventDefault();

// //     if (!name.trim()) return toast.error("Name cannot be empty");

// //     try {
// //       await updateUserProfile({
// //         displayName: name,
// //         photoURL: photo || "https://i.ibb.co/2FxYp8v/default-avatar.png",
// //       });

// //       toast.success("Profile updated successfully!");
// //       setEditMode(false);
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to update profile!");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
// //       <h2 className="text-3xl font-bold text-blue-600 mb-6 animate__animated animate__fadeInDown">
// //         My Profile
// //       </h2>

// //       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center animate__animated animate__fadeIn">
// //         <img
// //           src={
// //             user?.photoURL && user.photoURL !== ""
// //               ? user.photoURL
// //               : "https://i.ibb.co/2FxYp8v/default-avatar.png"
// //           }
// //           alt={user?.displayName}
// //           className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-2 border-blue-500"
// //         />
// //         <h3 className="text-xl font-semibold">{user?.displayName || "No Name"}</h3>
// //         <p className="text-gray-600">{user?.email}</p>

// //         <button
// //           onClick={() => setEditMode(!editMode)}
// //           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
// //         >
// //           {editMode ? "Cancel" : "Update Profile"}
// //         </button>

// //         {editMode && (
// //           <form onSubmit={handleUpdateProfile} className="mt-4 space-y-3 text-left">
// //             <div>
// //               <label className="block mb-1 font-medium">Name</label>
// //               <input
// //                 type="text"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                 placeholder="Enter new name"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-1 font-medium">Photo URL</label>
// //               <input
// //                 type="text"
// //                 value={photo}
// //                 onChange={(e) => setPhoto(e.target.value)}
// //                 className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //                 placeholder="Enter new photo URL"
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
// //             >
// //               Save Changes
// //             </button>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyProfile;




// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-hot-toast";
// import "animate.css";

// const MyProfile = () => {
//   const { user, updateUserProfile } = useContext(AuthContext);
//   const [editMode, setEditMode] = useState(false);
//   const [name, setName] = useState(user?.displayName || "");
//   const [photo, setPhoto] = useState(user?.photoURL || "");

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) return toast.error("Name cannot be empty");

//     try {
//       await updateUserProfile({
//         displayName: name,
//         photoURL: photo || "https://i.ibb.co/2FxYp8v/default-avatar.png",
//       });

//       toast.success("Profile updated successfully!");
//       setEditMode(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to update profile!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6 animate__animated animate__fadeInDown">
//         My Profile
//       </h2>

//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center animate__animated animate__fadeIn">
//         <img
//           src={
//             user?.photoURL && user.photoURL !== ""
//               ? user.photoURL
//               : "https://i.ibb.co/2FxYp8v/default-avatar.png"
//           }
//           alt={user?.displayName}
//           className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-2 border-blue-500"
//         />
//         <h3 className="text-xl font-semibold text-gray-800">{user?.displayName || "No Name"}</h3>
//         <p className="text-gray-500">{user?.email}</p>

//         <button
//           onClick={() => setEditMode(!editMode)}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           {editMode ? "Cancel" : "Update Profile"}
//         </button>

//         {editMode && (
//           <form onSubmit={handleUpdateProfile} className="mt-4 space-y-3 text-left">
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//                 placeholder="Enter new name"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
//               <input
//                 type="text"
//                 value={photo}
//                 onChange={(e) => setPhoto(e.target.value)}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//                 placeholder="Enter new photo URL"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Save Changes
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import "animate.css";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Name cannot be empty");

    try {
      await updateUserProfile({
        displayName: name,
        photoURL: photo || "https://i.ibb.co/2FxYp8v/default-avatar.png",
      });

      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 animate__animated animate__fadeInDown">
        My Profile
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center animate__animated animate__fadeIn">
        {/* Profile Image */}
        <img
          src={
            user?.photoURL && user.photoURL !== ""
              ? user.photoURL
              : "https://i.ibb.co/2FxYp8v/default-avatar.png"
          }
          alt={user?.displayName || "User"}
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-2 border-blue-500"
        />

        {/* User Info */}
        <h3 className="text-xl font-semibold text-gray-800">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-500">{user?.email || "No Email"}</p>

        {/* Update Profile Button */}
        <button
          onClick={() => setEditMode(!editMode)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editMode ? "Cancel" : "Update Profile"}
        </button>

        {/* Edit Form */}
        {editMode && (
          <form onSubmit={handleUpdateProfile} className="mt-4 space-y-3 text-left">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                placeholder="Enter new name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                placeholder="Enter new photo URL"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
