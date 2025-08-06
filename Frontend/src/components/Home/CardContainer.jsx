import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Stylish Backpack",
    price: 49.99,
    category: "Fashion",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    category: "Wearables",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 74.99,
    category: "Sports",
    image: "https://via.placeholder.com/300x200",
  },
];


const CardContainer = () => {
  return (
     <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContainer
