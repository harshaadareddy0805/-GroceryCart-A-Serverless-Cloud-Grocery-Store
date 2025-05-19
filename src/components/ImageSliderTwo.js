import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSliderTwo = () => {
  return (
    <div style={{ marginTop: '10px' }}>  {/* Gap between product boxes and slider */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"  // Ensure the image path is correct
            alt="Second slide"
            style={{
              height: 'auto',          // Keep the image’s natural height
              width: '100%',           // Ensure the image takes up full width without stretching
              paddingLeft: '20px', 
              paddingRight: '20px',
              marginTop: '0px'        // Adding a small gap above the image
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSliderTwo;
  
