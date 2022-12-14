import { FC } from 'react';
import { IProductItems } from '../interfaces';
export const ListProductsGrid: FC<IProductItems> = ({ items }) => {
  return (
    <>
      <div className='grid gap-5 grid-cols-3'>
        {items?.map((it, i) => (
          <div key={i} className='p-4 shadow-md rounded-md'>
            <p>{it.name}</p>
            <small>{`$` + it.price}</small>
          </div>
        ))}
      </div>
    </>
  );
};
