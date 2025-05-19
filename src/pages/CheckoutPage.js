import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import CheckoutHeader from '../components/CheckoutHeader';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ user, onPlaceOrder }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Define logout handler inside component
  const handleLogout = () => {
    // Clear auth state here if needed
    navigate('/'); // Redirect to landing page
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (Object.values(shippingInfo).some((field) => field.trim() === '')) {
      alert('Please fill out all shipping fields.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const orderDetails = {
      shippingInfo,
      cartItems,
      totalAmount,
      paymentMethod,
    };

    if (onPlaceOrder) {
      onPlaceOrder(orderDetails);
    }

    alert('Order placed successfully!');
  };

  return (
    <>
      {/* Pass local logout handler to header */}
      <CheckoutHeader user={user} onLogout={handleLogout} />

      <div className="container my-4">
        {/* Shipping Address */}
        <Card className="mb-4 shadow-sm">
          <Card.Header style={{ backgroundColor: '#28a745', color: '#fff' }}>
            Shipping Address
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zip"
                      value={shippingInfo.zip}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>

        {/* Order Summary */}
        <Card className="mb-4 shadow-sm">
          <Card.Header style={{ backgroundColor: '#28a745', color: '#fff' }}>
            Order Summary
          </Card.Header>
          <Card.Body>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, idx) => (
                <div key={idx} className="d-flex justify-content-between mb-2">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            )}
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Total:</strong>
              <strong>₹{totalAmount.toFixed(2)}</strong>
            </div>
          </Card.Body>
        </Card>

        {/* Payment Method */}
        <Card className="mb-4 shadow-sm">
          <Card.Header style={{ backgroundColor: '#28a745', color: '#fff' }}>
            Payment Method
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Check
                type="radio"
                name="payment"
                label="Cash on Delivery"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mb-2"
              />
              <Form.Check
                type="radio"
                name="payment"
                label="Credit/Debit Card"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Form>
          </Card.Body>
        </Card>

        {/* Place Order */}
        <div className="text-end">
          <Button variant="success" size="lg" onClick={handleOrder}>
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
