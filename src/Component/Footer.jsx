import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700">
  <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
    
  
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-3">
        Skill<span className="text-orange-500">Swap</span>
      </h2>
      <p className="text-sm text-gray-500">
        Exchange your skills, learn from others, and grow together in your local community.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <Link to= "/" ><li className="hover:text-blue-500">Home</li></Link>
        <Link to= "/myprofile" ><li className="hover:text-blue-500">My Profile</li></Link>
        <Link to= "/login" ><li className="hover:text-blue-500">Login</li></Link>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Us</h3>
      <p className="text-sm">📧 info@skillswap.com</p>
      <p className="text-sm">📞 +880 1234-567890</p>
      <div className="flex gap-4 mt-3">
        <a href="#" className="hover:text-blue-600">
          <i className="fab fa-facebook text-xl"></i>
        </a>
        <a href="#" className="hover:text-pink-500">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="hover:text-blue-400">
          <i className="fab fa-twitter text-xl"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
    © 2025 SkillSwap | All Rights Reserved | <a href="#" className="hover:text-blue-500">Privacy Policy</a>
  </div>
</footer>

    );
};

export default Footer;