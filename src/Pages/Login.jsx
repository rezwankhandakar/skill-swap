


import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle, resetPassword } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);
    signIn(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Invalid email or password"))
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google login failed!"))
      .finally(() => setLoading(false));
  };

  const handleForgetPassword = () => {
    const email = prompt("Enter your email for password reset");
    if (!email) return;
    resetPassword(email)
      .then(() => toast.success("Password reset email sent!"))
      .catch(() => toast.error("Failed to send reset email"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login to <span className="text-orange-500">SkillSwap</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
  type="email"
  name="email"
  required
  className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
  type="password"
  name="password"
  required
  className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
          </div>

          <div className="flex justify-between items-center text-sm text-blue-500">
            <button type="button" onClick={handleForgetPassword} className="hover:underline">
              Forget Password?
            </button>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider my-4 text-gray-400">OR</div>

        <button
  onClick={handleGoogleLogin}
  className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg text-gray-800 hover:bg-gray-100 transition font-medium"
>
  <FcGoogle size={24} /> Login with Google
</button>

      </div>
    </div>
  );
};

export default Login;
