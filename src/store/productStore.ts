import zus from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { products } from '../../data';
import { IProductStore } from '../interfaces';

export const useProductStore = zus(
  devtools(
    persist<IProductStore>(
      (set) => ({
        items: [],
        setItems: (p) =>
          set((prev) => ({
            ...prev,
            items: p,
          })),
        filterByCat: async (key, products) => {
          await set(() => ({
            items: products?.filter((p) => p.category.includes(key)),
          }));
        },
        resetProducts: async (products) => {
          await set(() => ({
            items: products,
          }));
        },
        sortBy: async (products, type) => {
          if (type === 'high') {
            await set(() => ({
              items: products?.sort((a, b) => b.price - a.price),
            }));
          } else if (type === 'low') {
            await set(() => ({
              items: products?.sort((a, b) => a.price - b.price),
            }));
          } else if (type === 'a2z') {
            await set(() => ({
              items: products?.sort((a, b) => {
                const na = a.name.toLowerCase();
                const nb = b.name.toLowerCase();
                if (na < nb) return -1;
                if (na > nb) return 1;
                return 0;
              }),
            }));
          } else if (type === 'z2a') {
            await set(() => ({
              items: products?.sort((a, b) => {
                const na = a.name.toLowerCase();
                const nb = b.name.toLowerCase();
                if (na < nb) return 1;
                if (na > nb) return -1;
                return 0;
              }),
            }));
          }
        },
      }),
      {
        name: 'products',
      },
    ),
    { enabled: false },
  ),
);
