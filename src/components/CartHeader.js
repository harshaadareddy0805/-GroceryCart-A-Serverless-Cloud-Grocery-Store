import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserCircle,
  faCreditCard,
  faBoxOpen,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartHeader = ({ user, onLogout }) => {
  return (
    <header
      className="d-flex justify-content-between align-items-center p-3 shadow-sm flex-wrap"
      style={{ backgroundColor: '#28a745' }}
    >
      {/* Store Name */}
      <h2
        className="store-name m-0 d-flex align-items-center"
        style={{ fontFamily: 'Exo 2, sans-serif', color: '#fff' }}
      >
        <FontAwesomeIcon icon={faCartShopping} size="lg" className="me-2" />
        GroceryCart
      </h2>

      {/* Navigation + Account */}
      <div className="d-flex align-items-center gap-4 mt-3 mt-sm-0 ms-auto">

        {/* Home */}
        <Link to="/home" className="btn btn-outline-light rounded-pill d-flex align-items-center">
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Home
        </Link>

        {/* Products */}
        <Link to="/products" className="btn btn-outline-light rounded-pill d-flex align-items-center">
          <FontAwesomeIcon icon={faBoxOpen} className="me-2" />
          Products
        </Link>

        {/* Checkout */}
        <Link to="/checkout" className="btn btn-outline-light rounded-pill d-flex align-items-center">
          <FontAwesomeIcon icon={faCreditCard} className="me-2" />
          Checkout
        </Link>

        {/* Account Dropdown */}
        <DropdownButton
          id="dropdown-account"
          title={<FontAwesomeIcon icon={faUserCircle} size="2x" style={{ color: '#fff' }} />}
          variant="link"
          align="end"
          className="mt-1"
        >
          <Dropdown.Header>
            {user?.name && <strong>{user.name}</strong>}
            {user?.email && (
              <div style={{ fontSize: '0.8rem', color: '#666' }}>{user.email}</div>
            )}
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </header>
  );
};

export default CartHeader;
