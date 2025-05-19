import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import CategoryBoxes from '../components/CategoryBoxes';
import ImageSliderTwo from '../components/ImageSliderTwo';
import ImageSlider3 from '../components/ImageSlider3';

const LandingPage = ({ onLoginClick }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLoginClick();           // Set login state in App.js
    navigate('/home');        // Redirect to HomePage
  };

  return (
    <div>
      <Header onLoginClick={handleLogin} />
      <ImageSlider />
      <CategoryBoxes />
      <ImageSliderTwo />
      <ImageSlider3 />
    </div>
  );
};

export default LandingPage;
