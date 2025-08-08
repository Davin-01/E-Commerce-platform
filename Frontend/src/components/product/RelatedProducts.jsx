import React from 'react';

const RelatedProducts = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">{product.description}</p>
                <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
