import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsHeader from '../components/ProductsHeader';
import { useCart } from '../context/CartContext';

// Sample product data
const productsData = [
  // Fruits
  { id: 1, category: 'Fruits', name: 'Apple', price: 1.5, image: 'https://via.placeholder.com/150?text=Apple' },
  { id: 2, category: 'Fruits', name: 'Banana', price: 0.8, image: 'https://via.placeholder.com/150?text=Banana' },
  { id: 3, category: 'Fruits', name: 'Orange', price: 1.2, image: 'https://via.placeholder.com/150?text=Orange' },
  { id: 4, category: 'Fruits', name: 'Mango', price: 2.0, image: 'https://via.placeholder.com/150?text=Mango' },
  // Vegetables
  { id: 5, category: 'Vegetables', name: 'Carrot', price: 0.5, image: 'https://via.placeholder.com/150?text=Carrot' },
  { id: 6, category: 'Vegetables', name: 'Broccoli', price: 1.1, image: 'https://via.placeholder.com/150?text=Broccoli' },
  { id: 7, category: 'Vegetables', name: 'Potato', price: 0.4, image: 'https://via.placeholder.com/150?text=Potato' },
  { id: 8, category: 'Vegetables', name: 'Tomato', price: 0.6, image: 'https://via.placeholder.com/150?text=Tomato' },
  // Dairy
  { id: 9, category: 'Dairy', name: 'Milk', price: 1.0, image: 'https://via.placeholder.com/150?text=Milk' },
  { id: 10, category: 'Dairy', name: 'Cheese', price: 3.5, image: 'https://via.placeholder.com/150?text=Cheese' },
  { id: 11, category: 'Dairy', name: 'Yogurt', price: 2.0, image: 'https://via.placeholder.com/150?text=Yogurt' },
  { id: 12, category: 'Dairy', name: 'Butter', price: 2.5, image: 'https://via.placeholder.com/150?text=Butter' },
  // Desserts
  { id: 13, category: 'Desserts', name: 'Chocolate Cake', price: 4.0, image: 'https://via.placeholder.com/150?text=Chocolate+Cake' },
  { id: 14, category: 'Desserts', name: 'Ice Cream', price: 3.0, image: 'https://via.placeholder.com/150?text=Ice+Cream' },
  { id: 15, category: 'Desserts', name: 'Donut', price: 1.5, image: 'https://via.placeholder.com/150?text=Donut' },
  { id: 16, category: 'Desserts', name: 'Cupcake', price: 2.0, image: 'https://via.placeholder.com/150?text=Cupcake' },
  // Drinks
  { id: 17, category: 'Drinks', name: 'Orange Juice', price: 2.5, image: 'https://via.placeholder.com/150?text=Orange+Juice' },
  { id: 18, category: 'Drinks', name: 'Coffee', price: 3.0, image: 'https://via.placeholder.com/150?text=Coffee' },
  { id: 19, category: 'Drinks', name: 'Tea', price: 2.0, image: 'https://via.placeholder.com/150?text=Tea' },
  { id: 20, category: 'Drinks', name: 'Soda', price: 1.5, image: 'https://via.placeholder.com/150?text=Soda' },
];

const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Desserts', 'Drinks'];

const ProductPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { cartItems, addToCart } = useCart();

  const handleLogout = () => {
    // Clear auth state here if any

    // Redirect to landing page
    navigate('/');
  };

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div>
      <ProductsHeader
        onLogout={handleLogout}
        cartItemCount={cartItems.length}
      />

      <div className="container my-4">
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              className={`btn btn-outline-success ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              style={{ minWidth: '100px' }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
              >
                <div
                  className="card"
                  style={{ width: '16rem', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: '160px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <button
                      className="btn btn-success mt-auto"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-100 my-5">
              <h5>No products found in this category.</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
