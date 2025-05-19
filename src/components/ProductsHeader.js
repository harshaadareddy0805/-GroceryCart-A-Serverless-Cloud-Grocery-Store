import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping, faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsHeader = ({ user, onLogout, cartItemCount }) => {
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

      {/* Navigation + Cart + Account */}
      <div className="d-flex align-items-center gap-4 mt-3 mt-sm-0 ms-auto">

        {/* Home Button */}
        <Link
          to="/home"
          className="btn btn-outline-light rounded-pill d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Home
        </Link>

        {/* Cart Link */}
        <Link
          to="/cart"
          className="btn btn-outline-light rounded-pill d-flex align-items-center position-relative"
          style={{
            backgroundColor: '#28a745',
            border: '1px solid #fff',
            color: '#fff',
          }}
        >
          Cart
          <FontAwesomeIcon icon={faBagShopping} size="lg" className="ms-2" />
          {cartItemCount > 0 && (
            <Badge
              pill
              bg="danger"
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                fontSize: '10px',
                padding: '4px 6px',
                borderRadius: '50%',
                minWidth: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              {cartItemCount}
            </Badge>
          )}
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
            {user?.email && <div style={{ fontSize: '0.8rem', color: '#666' }}>{user.email}</div>}
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </header>
  );
};

export default ProductsHeader;
