import { API_ENDPOINT } from './index';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Category {
  id: number;
  name: string;
  code: string;
}

export function useCatagory() {
  return useQuery<Category[], Error>({
    queryKey: ['category'],
    queryFn: async (): Promise<Category[]> => {
      const { data } = await axios
        .get(`${API_ENDPOINT}/category`)
        .then((r) => r.data);

      return data;
    },
  });
}
