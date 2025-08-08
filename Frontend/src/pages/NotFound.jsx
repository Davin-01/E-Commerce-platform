import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-gray-400 tracking-widest">404</h1>
      <div className="bg-red-500 px-2 text-sm text-white rounded rotate-12 absolute">
        Page Not Found
      </div>
      <p className="mt-6 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
