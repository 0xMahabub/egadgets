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
          await set(() => ({
            items: products?.filter((p) => p.category.includes(key)),
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
