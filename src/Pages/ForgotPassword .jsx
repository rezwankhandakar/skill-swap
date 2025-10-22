import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((err) => toast.error("Failed to send reset email"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
