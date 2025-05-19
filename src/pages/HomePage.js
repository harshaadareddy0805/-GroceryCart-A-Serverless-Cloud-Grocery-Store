import React from 'react';
import HomeHeader from '../components/HomeHeader';
import ImageSlider from '../components/ImageSlider';
import CategoryBoxes from '../components/CategoryBoxes';
import ImageSliderTwo from '../components/ImageSliderTwo';
import ImageSlider3 from '../components/ImageSlider3';

const HomePage = ({ user, onLogoutClick }) => {
  return (
    <div>
      <HomeHeader user={user} onLogout={onLogoutClick} />
      <ImageSlider />
      <CategoryBoxes />
      <ImageSliderTwo />
      <ImageSlider3 />
    </div>
  );
};

export default HomePage;
