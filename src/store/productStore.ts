import zus from 'zustand';
import { devtools, persist } from 'zustand/middleware';
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
          set(() => ({
            items: products?.filter((p) => p.category.includes(key)),
          }));
        },
        resetProducts: async (products) => {
          set(() => ({
            items: products,
          }));
        },
        sortBy: async (type) => {
          if (type === 'high') {
            set((prev) => ({
              ...prev,
              items: prev.items?.sort((a, b) => b.price - a.price),
            }));
          } else if (type === 'low') {
            set((prev) => ({
              ...prev,
              items: prev.items?.sort((a, b) => a.price - b.price),
            }));
          } else if (type === 'a2z') {
            set((prev) => ({
              ...prev,
              items: prev.items?.sort((a, b) => {
                const na = a.name.toLowerCase();
                const nb = b.name.toLowerCase();
                if (na < nb) return -1;
                if (na > nb) return 1;
                return 0;
              }),
            }));
          } else if (type === 'z2a') {
            set((prev) => ({
              ...prev,
              items: prev.items?.sort((a, b) => {
                const na = a.name.toLowerCase();
                const nb = b.name.toLowerCase();
                if (na < nb) return 1;
                if (na > nb) return -1;
                return 0;
              }),
            }));
          }
        },
        search: (q, products) => {
          set(() => ({
            items: products?.filter((p) => {
              if (q.length > 0 || q !== '' || q !== undefined || q !== null) {
                return p.name.toLowerCase().includes(q.toLowerCase());
              } else {
                return products;
              }
            }),
          }));
        },
      }),
      {
        name: 'products',
      },
    ),
    { enabled: false },
  ),
);
