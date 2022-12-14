import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ShopPage } from './Shop';
import { CartPage } from './Cart';

const AppRouter: FC = () => {
  // entry all routes in a object first
  const routers: RouteObject[] = [
    {
      children: [
        { element: <ShopPage />, index: true },
        { element: <h1>About Us</h1>, path: '/about' },
        { element: <CartPage />, path: '/cart' },
        { element: <h1>Not Found!</h1>, path: '*' },
      ],
    },
  ];

  // register all routes object info router component
  const register = useRoutes(routers);
  return register;
};

export default AppRouter;
