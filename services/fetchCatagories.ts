import { API_ENDPOINT } from './index';
import axios from 'axios';

async function fetchCatagories() {
  const { data } = await axios.get(`${API_ENDPOINT}/category`);

  return data;
}

export { fetchCatagories };
