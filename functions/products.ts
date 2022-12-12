import { products } from '../data';

// JSON API Response
export const handler = async (_event, _context) => {
  const res = {
    message: 'All Products',
    data: products,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
