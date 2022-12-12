interface IProduct {
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

// mock data
export const products: IProduct[] = [
  {
    id: 1,
    photo: '',
    name: 'iPhone XS',
    category: ['smartphone', 'iphone'],
    price: 799,
    qty: 4,
    sold: 12,
    rating: 4.9,
    prop: {
      variant: '64gb',
      color: 'golden',
    },
  },
  {
    id: 2,
    photo: '',
    name: 'iPhone XS',
    category: ['smartphone', 'iphone'],
    price: 999,
    qty: 2,
    sold: 6,
    rating: 4.8,
    prop: {
      variant: '256gb',
      color: 'white',
    },
  },
  {
    id: 3,
    photo: '',
    name: 'iPhone XS',
    category: ['smartphone', 'iphone'],
    price: 999,
    qty: 3,
    sold: 10,
    rating: 4.9,
    prop: {
      variant: '256gb',
      color: 'black',
    },
  },
  {
    id: 3,
    photo: '',
    name: 'iPhone XS',
    category: ['smartphone', 'iphone'],
    price: 999,
    qty: 3,
    sold: 10,
    rating: 4.9,
    prop: {
      variant: '256gb',
      color: 'black',
    },
  },
  {
    id: 4,
    photo: '',
    name: 'iPhone 14',
    category: ['smartphone', 'iphone'],
    price: 1299,
    qty: 1,
    sold: 7,
    rating: 4.95,
    prop: {
      variant: '256gb',
      color: 'black',
    },
  },
  {
    id: 5,
    photo: '',
    name: 'Samsung Galaxy S22',
    category: ['smartphone', 'android'],
    price: 1199,
    qty: 5,
    sold: 8,
    rating: 4.85,
    prop: {
      variant: '256gb',
      color: 'golden',
    },
  },
  {
    id: 6,
    photo: '',
    name: 'Pixel 7',
    category: ['smartphone', 'android'],
    price: 999,
    qty: 3,
    sold: 4,
    rating: 4.8,
    prop: {
      variant: '256gb',
      color: 'black',
    },
  },
  {
    id: 7,
    photo: '',
    name: 'Apple Macbook Pro M1-512GB-16GB',
    category: ['laptop', 'macbook'],
    price: 1499,
    qty: 2,
    sold: 3,
    rating: 4.8,
    prop: {
      variant: '512gb',
      color: 'silver-gray',
      ram: 16,
      chipset: 'm1',
      cores: 8,
    },
  },
  {
    id: 8,
    photo: '',
    name: 'Lenevo Ideapad Slim 7i',
    category: ['laptop'],
    price: 1099,
    qty: 1,
    sold: 2,
    rating: 4.75,
    prop: {
      variant: '1tb',
      color: 'dark',
      ram: 32,
      chipset: 'intel',
      cores: 16,
    },
  },
  {
    id: 9,
    photo: '',
    name: 'Apple Macbook Pro i7-512GB-16GB',
    category: ['laptop', 'macbook'],
    price: 1199,
    qty: 2,
    sold: 12,
    rating: 4.8,
    prop: {
      variant: '512gb',
      color: 'silver-gray',
      ram: 16,
      chipset: 'intel',
      cores: 8,
    },
  },
  {
    id: 10,
    photo: '',
    name: 'Apple Macbook Pro M2-512GB-16GB',
    category: ['laptop', 'macbook'],
    price: 1599,
    qty: 1,
    sold: 2,
    rating: 4.95,
    prop: {
      variant: '512gb',
      color: 'silver-gray',
      ram: 32,
      chipset: 'm1',
      cores: 16,
    },
  },
];
