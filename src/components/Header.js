import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl, Dropdown, Badge } from 'react-bootstrap';

const Header = ({ onLoginClick }) => {
  const [cartItemCount, setCartItemCount] = useState(3); // Sample cart count

  return (
    <header className="d-flex justify-content-between align-items-center p-3 shadow-sm flex-wrap" style={{ backgroundColor: '#28a745' }}>
      {/* Store Name + Icon */}
      <h2 className="store-name m-0 d-flex align-items-center" style={{ fontFamily: 'Exo 2, sans-serif', color: '#fff' }}>
        <FontAwesomeIcon icon={faCartShopping} size="lg" className="me-2" style={{ color: '#fff' }} />
        GroceryCart
      </h2>

      {/* Search, Categories, and Cart Icon */}
      <div className="d-flex align-items-center gap-3 flex-grow-1 justify-content-start mt-2 mt-sm-0" style={{ marginLeft: '15px' }}>
        {/* Search Bar */}
        <Form className="d-flex" style={{ maxWidth: '300px', width: '100%' }}>
          <FormControl
            type="search"
            placeholder="Search products..."
            className="me-2 rounded-pill"
            aria-label="Search"
          />
        </Form>

        {/* Categories Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="outline-light" className="rounded-pill">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/fruits">Fruits</Dropdown.Item>
            <Dropdown.Item href="#/vegetables">Vegetables</Dropdown.Item>
            <Dropdown.Item href="#/dairy">Dairy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Cart Icon with Item Count inside Curved Box with Border */}
        <div className="d-flex align-items-center gap-2" style={{ marginLeft: '10px', position: 'relative' }}>
          <div className="d-flex align-items-center p-2 rounded-pill" style={{ backgroundColor: '#28a745', border: '1px solid #fff' }}>
            <span style={{ color: '#fff', fontSize: '16px' }}>Cart</span>
            <FontAwesomeIcon
              icon={faBagShopping}
              size="lg"
              style={{ color: '#fff' }}
              className="ms-2"
            />
          </div>
          <Badge
            pill
            bg="danger"
            style={{
              position: 'absolute',
              bottom: '-5px',
              right: '-5px',
              fontSize: '10px',
              color: '#fff',
              padding: '4px 6px',
              borderRadius: '50%',
              minWidth: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {cartItemCount}
          </Badge>
        </div>
      </div>

      {/* Login Button */}
      <Button
        variant="light"
        onClick={onLoginClick}
        className="d-flex align-items-center gap-2 rounded-pill px-4 mt-2 mt-sm-0"
      >
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Button>
    </header>
  );
};

export default Header;










