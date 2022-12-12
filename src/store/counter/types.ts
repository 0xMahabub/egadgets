export interface ICounter {
  count: number;
  incre: (by?: number) => void;
  decre: (by?: number) => void;
  reset: () => void;
}
