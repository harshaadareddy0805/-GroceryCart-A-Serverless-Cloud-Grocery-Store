import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider3 = () => {
  return (
    <div style={{ marginTop: '2px' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner3.jpg"
            alt="Third slide"
            style={{
              height: 'auto',
              width: '100%',
              paddingLeft: '20px',
              paddingRight: '20px',
              marginTop: '0px'
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider3;
