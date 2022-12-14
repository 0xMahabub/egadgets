import { API_ENDPOINT } from './index';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Product {
  id: number;
  name: string;
  prop: object;
  category: string[];
  price: number;
  qty: number;
  sold: number;
  rating: number;
  photo: string;
}

export function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: async (): Promise<Product[]> => {
      const { data } = await axios
        .get(`${API_ENDPOINT}/products`)
        .then((r) => r.data);

      return data;
    },
  });
}
