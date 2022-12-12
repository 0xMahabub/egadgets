import { categories } from '../data';

// JSON API Response
export const handler = async (_event, _context) => {
  const res = {
    message: 'All Categories',
    data: categories,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
