import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-blue-300 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover the Latest Deals at TrustMall
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Shop quality products at unbeatable prices. New arrivals added weekly.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Start Shopping
        </Link>
      </div>
    </header>
  );
};

export default Header
