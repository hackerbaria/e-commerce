import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const Home: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 2, name: 'Product 2', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=3796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // Add more products
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;