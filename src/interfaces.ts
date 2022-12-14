// global entities or models as shared
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
export interface IProductItems {
  items: Product[];
}
export interface IShopTop {
  mode: string;
  classes?: string;
  itemsCount: number | undefined;
  toggler: () => void;
}
export interface IShopSide {
  classes?: string;
}
export interface ILink {
  link: string;
  label: string;
  blank?: boolean;
  classes?: string;
}
