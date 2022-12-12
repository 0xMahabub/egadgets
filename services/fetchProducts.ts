import { API_ENDPOINT } from './index';
import axios from 'axios';

async function fetchProducts() {
  const { data } = await axios.get(`${API_ENDPOINT}/products`);

  return data;
}

export { fetchProducts };
