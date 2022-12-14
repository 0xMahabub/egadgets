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
  prop: object;
  category: string[];
  price: number;
  qty: number;
  sold: number;
  rating: number;
  photo: string;
}

// -----------------------------------------------------=>
// CUSTOM :=> Props @interfaces
// -----------------------------------------------------=>
export interface IProductItems {
  items: Product[] | undefined;
}
export interface IShopTop {
  mode: string;
  classes?: string;
  itemsCount: number | undefined;
  toggler: () => void;
  sortBy: (type: string) => void;
}
export interface IShopSide {
  classes?: string;
  activeCat?: string;
  changeByCategory: (key: string) => void;
  resetAll: () => void;
}
export interface ILink {
  link: string;
  label: string;
  blank?: boolean;
  classes?: string;
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
  sortBy: (products: Product[] | undefined, type: string) => void;
  resetProducts: (products: Product[] | undefined) => void;
}
