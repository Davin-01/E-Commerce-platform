import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api'; 

const ProductCard = ({product}) => {
  return (
      <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4">
      <img 
        src={`${BASE_URL}/${product.image}`} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <p className="text-md font-bold text-black mb-4">Ksh.{product.price}</p>
      <Link 
        to={`/product/${product.id}`}
        className="block text-center bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard
