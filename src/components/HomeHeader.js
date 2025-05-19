import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl, Dropdown, Badge, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeHeader = ({ user, onLogout }) => {
  const [cartItemCount, setCartItemCount] = useState(3); // Placeholder
  const navigate = useNavigate(); // <-- used for redirecting to landing page

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Your existing logout logic (like clearing tokens, context, etc.)
    }
    navigate('/'); // Redirect to landing page
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 shadow-sm flex-wrap" style={{ backgroundColor: '#28a745' }}>
      <h2 className="store-name m-0 d-flex align-items-center" style={{ fontFamily: 'Exo 2, sans-serif', color: '#fff' }}>
        <FontAwesomeIcon icon={faCartShopping} size="lg" className="me-2" />
        GroceryCart
      </h2>

      <div className="d-flex align-items-center gap-3 flex-grow-1 justify-content-start mt-2 mt-sm-0" style={{ marginLeft: '15px' }}>
        <Form className="d-flex" style={{ maxWidth: '300px', width: '100%' }}>
          <FormControl
            type="search"
            placeholder="Search products..."
            className="me-2 rounded-pill"
            aria-label="Search"
          />
        </Form>

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

        <Link to="/products" className="btn btn-outline-light rounded-pill">
          Products
        </Link>

        <div className="d-flex align-items-center gap-2" style={{ marginLeft: '10px', position: 'relative' }}>
          <div className="d-flex align-items-center p-2 rounded-pill" style={{ backgroundColor: '#28a745', border: '1px solid #fff' }}>
            <span style={{ color: '#fff', fontSize: '16px' }}>Cart</span>
            <FontAwesomeIcon icon={faBagShopping} size="lg" className="ms-2" style={{ color: '#fff' }} />
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

      <DropdownButton
        id="dropdown-account"
        title={<FontAwesomeIcon icon={faUserCircle} size="2x" style={{ color: '#fff' }} />}
        variant="link"
        align="end"
        className="mt-2 mt-sm-0"
      >
        <Dropdown.Header>
          {user?.name && <strong>{user.name}</strong>}
          {user?.email && <div style={{ fontSize: '0.8rem', color: '#666' }}>{user.email}</div>}
        </Dropdown.Header>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </DropdownButton>
    </header>
  );
};

export default HomeHeader;
