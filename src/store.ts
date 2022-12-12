import zus from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ICounter {
  count: number;
  incre: (by?: number) => void;
  decre: (by?: number) => void;
  reset: () => void;
}

export const useCounterStore = zus(
  devtools(
    persist<ICounter>((set) => ({
      count: 0,
      incre: (by = 1) =>
        set((state) => ({
          ...state,
          count: state.count + by,
        })),
      decre: (by = 1) =>
        set((state) => ({ ...state, count: state.count - by })),
      reset: () => set((state) => ({ ...state, count: 0 })),
    })),
  ),
);
