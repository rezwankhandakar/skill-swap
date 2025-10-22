// // Details.jsx
// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";

// const Details = () => {
//   const { id } = useParams(); // URL থেকে skillId নেওয়া
//   const [skill, setSkill] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   useEffect(() => {
//     // JSON থেকে ডেটা লোড
//     fetch("/SkillListing.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const selected = data.find((item) => item.skillId === parseInt(id));
//         setSkill(selected);
//       })
//       .catch((err) => console.error("Error loading JSON:", err));
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success("Session booked successfully!");
//     setFormData({ name: "", email: "" });
//   };

//   if (!skill) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="w-auto mx-auto p-6 bg-gray-50 text-gray-800 shadow">
//       <Toaster position="top-right" />

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Skill Image */}
//         <img
//           src={skill.image}
//           alt={skill.skillName}
//           className="h-64 w-64 md:w-1/3 rounded-xl object-cover"
//         />

//         {/* Skill Details */}
//         <div className="flex-1 space-y-3">
//           <h2 className="text-3xl font-bold text-blue-700">{skill.skillName}</h2>
//           <p className="text-gray-500">{skill.description}</p>

//           <div className="space-y-1">
//             <p>
//               <span className="font-semibold">Provider:</span> {skill.providerName}
//             </p>
//             <p>
//               <span className="font-semibold">Email:</span> {skill.providerEmail}
//             </p>
//             <p>
//               <span className="font-semibold">Price:</span> ${skill.price} / session
//             </p>
//             <p>
//               <span className="font-semibold">Rating:</span> ⭐ {skill.rating}
//             </p>
//             <p>
//               <span className="font-semibold">Slots Available:</span> {skill.slotsAvailable}
//             </p>
//             <p>
//               <span className="font-semibold">Category:</span> {skill.category}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Book Session Form */}
//       <div className="mt-10 bg-white p-6 rounded-xl shadow ">
//         <h3 className="text-2xl font-semibold text-blue-700 mb-4">Book a Session</h3>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       <div className="mt-6 text-center">
//         <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
//           ← Back to Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Details;


import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
  const { id } = useParams(); // URL থেকে skillId
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check login
  useEffect(() => {
    if (!loading && !user) {
      // redirect to login, save current location
      navigate("/login", { state: { from: location } });
    }
  }, [user, loading, navigate, location]);

  // Load skill JSON
  useEffect(() => {
    fetch("/SkillListing.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.skillId === parseInt(id));
        setSkill(selected);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  if (!skill) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-auto mx-auto p-6 bg-gray-50 text-gray-800 shadow min-h-screen">
      <Toaster position="top-right" />

      {/* Skill Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="h-64 w-full md:w-1/3 rounded-xl object-cover"
        />

        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold text-blue-700">{skill.skillName}</h2>
          <p className="text-gray-500">{skill.description}</p>

          <div className="space-y-1 mt-2">
            <p><span className="font-semibold">Provider:</span> {skill.providerName}</p>
            <p><span className="font-semibold">Email:</span> {skill.providerEmail}</p>
            <p><span className="font-semibold">Price:</span> ${skill.price} / session</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {skill.rating}</p>
            <p><span className="font-semibold">Slots Available:</span> {skill.slotsAvailable}</p>
            <p><span className="font-semibold">Category:</span> {skill.category}</p>
            <p><span className="font-semibold">Skill ID:</span> {skill.skillId}</p>
            {skill.extra && <p><span className="font-semibold">Extra Info:</span> {skill.extra}</p>}
          </div>
        </div>
      </div>

      {/* Book Session Form */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Book a Session</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Details;

