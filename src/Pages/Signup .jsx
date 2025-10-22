
import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setPasswordError("");

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must have at least 1 uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must have at least 1 lowercase letter");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile({
          displayName: name,
          photoURL: photo || "https://i.ibb.co/2FxYp8v/default-avatar.png",
        })
          .then(() => {
            toast.success("Signup successful!");
            form.reset();
            navigate("/");
          })
          .catch((err) => {
            console.error("Profile update error:", err);
            setError("Profile update failed!");
          });
      })
      .catch((err) => {
        console.error("Signup error:", err);
        setError("Signup failed! Try again.");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Google login error:", err);
        setError("Google login failed!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-4">
      <Toaster position="top-right" />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create <span className="text-orange-500">Account</span>
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Optional: profile picture URL"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Password
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      required
      className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
      placeholder="Enter password"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
    >
      {showPassword ? (
        <AiOutlineEyeInvisible size={20} />
      ) : (
        <AiOutlineEye size={20} />
      )}
    </button>
  </div>

  {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
</div>


          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg text-gray-800 hover:bg-gray-100 transition font-medium"
          >
            <FcGoogle size={24} />Sign up with Google
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

