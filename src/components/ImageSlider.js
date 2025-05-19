import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  return (
    <div style={{ marginTop: '5px' }}> {/* Reduced top margin */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner1.jpg" // Ensure this path is correct
            alt="First slide"
            style={{
              height: 'auto',
              width: '100%',
              paddingLeft: '20px',
              paddingRight: '20px',
              marginTop: '0px' // Removed extra margin
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
