import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import { CartProvider } from './context/CartContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggles login state and logs to console
  const handleLoginClick = () => {
    setIsLoggedIn((prev) => {
      const newState = !prev;
      console.log(newState ? 'Logged In' : 'Logged Out');
      return newState;
    });
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Landing Page (default) */}
          <Route
            path="/"
            element={<LandingPage onLoginClick={handleLoginClick} />}
          />

          {/* Home Page - requires login */}
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <HomePage onLogoutClick={handleLoginClick} isLoggedIn={isLoggedIn} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Products Page - requires login */}
          <Route
            path="/products"
            element={
              isLoggedIn ? (
                <ProductPage onLogoutClick={handleLoginClick} isLoggedIn={isLoggedIn} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Cart Page - requires login */}
          <Route
            path="/cart"
            element={
              isLoggedIn ? (
                <CartPage onLogoutClick={handleLoginClick} isLoggedIn={isLoggedIn} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Checkout Page - requires login */}
          <Route
            path="/checkout"
            element={
              isLoggedIn ? (
                <CheckoutPage onLogoutClick={handleLoginClick} isLoggedIn={isLoggedIn} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Redirect all unknown routes to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
