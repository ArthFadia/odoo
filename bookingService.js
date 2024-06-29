import axios from 'axios';

const API_URL = 'http://localhost:5000/api/booking/';

const checkout = async (items) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(API_URL + 'checkout', { items }, {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
  return response.data;
};

export default { checkout };
