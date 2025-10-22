import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 text-center px-4">
  
 

  {/* Title */}
  <h1 className="text-5xl font-bold text-blue-600 mb-3">
    404
  </h1>

  {/* Message */}
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
    Oops! Page Not Found
  </h2>
  <p className="text-gray-500 mb-6">
    The page you are looking for doesn’t exist or has been moved.
  </p>

  {/* Button */}
  <a
    href="/"
    className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
  >
    ⬅️ Back to Home
  </a>
</div>

    );
};

export default ErrorPage;