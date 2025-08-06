import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter } from 'lucide-react';

const Footer = () => {
  return (
     <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side - Brand */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>

        {/* Center - Navigation */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </div>

        {/* Right Side - Social */}
        <div>
          <a 
            href="https://x.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 hover:text-black"
          >
            <Twitter size={18} />
            <span>@yourhandle</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
