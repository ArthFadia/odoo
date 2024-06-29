import axios from 'axios';

const API_URL = 'http://localhost:5000/api/payment/';

const processPayment = async (paymentData) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(API_URL + 'process', paymentData, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
  return response.data;
};

export default { processPayment };
