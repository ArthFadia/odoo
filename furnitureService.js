import axios from 'axios';

const API_URL = 'http://localhost:5000/api/furniture/';

const getFurniture = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getFurnitureById = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

export default { getFurniture, getFurnitureById };
