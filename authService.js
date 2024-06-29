import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const login = async (email, password) => {
  const response = await axios.post(API_URL + 'login', { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (username, email, password) => {
  return await axios.post(API_URL + 'register', { username, email, password });
};

const getUserProfile = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.get(API_URL + 'profile', {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  });
  return response.data;
};

export default { login, register, getUserProfile };

