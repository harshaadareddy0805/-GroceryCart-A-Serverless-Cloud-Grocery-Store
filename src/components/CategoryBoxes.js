import React from 'react';
import './CategoryBoxes.css';

const CategoryBoxes = () => {
  const products = [
    {
      name: 'Apple',
      image: '/images/apple.jpg',
      rating: 4,
      price: '$25.00',
    },
    {
      name: 'Carrot',
      image: '/images/carrot.jpg',
      rating: 3,
      price: '$18.00',
    },
    {
      name: 'Milk',
      image: '/images/dairy.jpg',
      rating: 5,
      price: '$15.00',
    },
    {
      name: 'Cake',
      image: '/images/desserts.jpg',
      rating: 4,
      price: '$40.00',
    },
    {
      name: 'Juice',
      image: '/images/drinks.jpg',
      rating: 5,
      price: '$20.00',
    },
    {
      name: 'Energy Drink',
      image: '/images/Energy-Drink.jpg',
      rating: 4,
      price: '$28.00',
    },
  ];

  return (
    <div className="category-section">
      <h2 className="category-title">Featured Products</h2>
      <div className="category-grid">
        {products.map((product, index) => (
          <div className="category-box" key={index}>
            <img src={product.image} alt={product.name} className="category-img" />
            <h5 className="category-name">{product.name}</h5>
            <div className="category-rating">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <div className="category-price">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBoxes;
