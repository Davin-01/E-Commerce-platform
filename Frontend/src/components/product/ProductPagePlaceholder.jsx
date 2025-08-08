import React from 'react';

const ProductPagePlaceholder = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 animate-pulse">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-64 bg-gray-300" />

        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-300 rounded w-full mb-2" />
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-4" />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="h-6 w-20 bg-gray-300 rounded" />
            <div className="h-10 w-32 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPagePlaceholder;
