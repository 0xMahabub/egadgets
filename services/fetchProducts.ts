import { API_ENDPOINT } from './index';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../src/interfaces';

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
