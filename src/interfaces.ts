// -----------------------------------------------------=>
// Entity :=> Model @interfaces
// -----------------------------------------------------=>
export interface Category {
  id: number;
  name: string;
  code: string;
}
export interface Product {
  id: number;
  name: string;
  prop: PropObj;
  category: string[];
  price: number;
  qty: number;
  sold: number;
  rating: number;
  photo: string;
}

/// properties as object
interface PropObj {
  variant?: string;
  color?: string;
  ram?: number;
  chipset?: string;
  cores?: number;
}

// -----------------------------------------------------=>
// CUSTOM :=> Props @interfaces
// -----------------------------------------------------=>
export interface IProductItems {
  items: Product[] | undefined;
  addToCart: (p: ICartItem) => void;
  inCart: (pid: number) => boolean;
}
export interface IShopTop {
  mode: string;
  classes?: string;
  itemsCount: number | undefined;
  toggler: () => void;
  sortBy: (type: string) => void;
  sortKey?: string;
}
export interface IShopSide {
  classes?: string;
  activeCat?: string;
  changeByCategory: (key: string) => void;
  resetAll: () => void;
  search: (q: string) => void;
}

export interface ISearch {
  searchFn: (q: string) => void;
}
export interface ILink {
  link: string;
  label: string;
  blank?: boolean;
  classes?: string;
  icon?: string;
}

// -----------------------------------------------------=>
// Zustand :=> InitialState @interfaces
// -----------------------------------------------------=>
export interface ISetting {
  listStyle: string;
  darkMode: boolean;
  toggleListStyle: () => void;
  toggleDarkMode: () => void;
}

export interface IProductStore {
  items: Product[] | undefined;
  setItems: (p: Product[] | undefined) => void;
  filterByCat: (key: string, products: Product[] | undefined) => void;
  sortBy: (type: string) => void;
  resetProducts: (products: Product[] | undefined) => void;
  search: (q: string, products: Product[] | undefined) => void;
}

export interface ICart {
  items: ICartItem[];
  addToCart: (p: ICartItem) => void;
  remove: (pid: number) => void;
  increQ: (pid: number) => void;
  decreQ: (pid: number) => void;
}

export interface ICartItem {
  id: number;
  name: string;
  prop: PropObj;
  price: number;
  photo: string;
  qty: number;
}
