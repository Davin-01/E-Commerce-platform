import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import Header from '../Home/Header';
import Error from '../ui/Error';
import ProductPagePlaceHolder from './ProductPagePlaceholder';
import RelatedProducts from './RelatedProducts';

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    api.get(`products/${slug}/`)
      .then(res => {
        setProduct(res.data);
        setError('');
        setLoading(false);
      })
      .catch(err => {
        setError('Product not found.');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <ProductPagePlaceHolder />; // Use ProductPagePlaceHolder />;
  if (error) return <Error error={error} />;

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>
            <div className="mt-4">
              <span className="text-lg font-semibold text-green-600">${product.price}</span>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <RelatedProducts categoryId={product.category} excludeProductId={product.id} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
