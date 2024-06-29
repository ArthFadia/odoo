import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bookingService from '../../services/bookingService';

const BookingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory();

  const handleCheckout = async () => {
    try {
      await bookingService.checkout(cartItems);
      history.push('/payment');
    } catch (error) {
      console.error(error);
      alert('Checkout failed');
    }
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="booking-cart">
      <h2>Booking Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default BookingCart;
