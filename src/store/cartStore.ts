import zus from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ICart, ICartItem } from '../interfaces';

const addQty = (_pid: number, items: ICartItem[]) => {
  const it = items.find((p) => p.id === _pid);
  if (it?.qty) {
    it.qty = it.qty + 1;
  }

  return [...items];
};

const subQty = (_pid: number, items: ICartItem[]) => {
  const it = items.find((p) => p.id === _pid);
  if (it?.qty && it.qty !== 0) {
    it.qty = it.qty - 1;
  }

  return [...items];
};

export const useCartStore = zus(
  devtools(
    persist<ICart>(
      (set) => ({
        items: [],
        addToCart: (p) => {
          set((prev) => ({
            items: [...prev.items, p],
          }));
        },
        remove: (pid) => {
          set((prev) => ({
            ...prev,
            items: prev.items.filter((p) => p.id !== pid),
          }));
        },
        increQ: (pid) => {
          set((prev) => ({
            ...prev,
            items: addQty(pid, prev.items),
          }));
        },
        decreQ: (pid) => {
          set((prev) => ({
            ...prev,
            items: subQty(pid, prev.items),
          }));
        },
      }),
      { name: 'cart' },
    ),
    { enabled: false },
  ),
);
