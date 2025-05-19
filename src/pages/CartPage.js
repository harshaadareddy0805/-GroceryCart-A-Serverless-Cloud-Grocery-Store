import React from 'react';
import CartHeader from '../components/CartHeader';
import { useCart } from '../context/CartContext';  
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ user }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();  
  const navigate = useNavigate();

  // Logout handler: clear auth if needed and redirect to landing page
  const handleLogout = () => {
    // TODO: Clear user authentication state here if applicable
    navigate('/'); // Redirect to landing page
  };

  const handleDecrease = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const handleIncrease = (product) => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const handleCheckout = () => {
    navigate('/checkout');  // Navigate to checkout page
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Pass handleLogout to CartHeader */}
      <CartHeader user={user} onLogout={handleLogout} />
      
      <Container className="mt-4">
        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Row>
            <Col md={8}>
              <ListGroup>
                {cartItems.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h5>{item.name}</h5>
                      <p>Price: ₹{item.price}</p>
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="outline-success"
                          size="sm"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline-success"
                          size="sm"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="text-end">
                      <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="danger"
                        size="sm"
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Order Summary</Card.Title>
                  <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
                  <h5>Total: ₹{totalPrice.toFixed(2)}</h5>
                  <Button
                    variant="success"
                    className="w-100 mt-3"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default CartPage;
