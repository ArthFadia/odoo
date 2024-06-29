import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import paymentService from '../../services/paymentService';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await paymentService.processPayment({ cardNumber, expiryDate, cvv });
      history.push('/profile');
    } catch (error) {
      console.error(error);
      alert('Payment failed');
    }
  };

  return (
    <div className="payment">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="text" className="form-control" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" className="form-control" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
