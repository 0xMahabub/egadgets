import { FC } from 'react';
import { IProductItems } from '../interfaces';

export const ListProducts: FC<IProductItems> = ({ items }) => {
  return (
    <>
      <div className='flex gap-y-3 flex-col items-start justify-start w-full'>
        {items?.map((it, i) => (
          <div key={i} className='p-4 shadow-md rounded-md w-full'>
            <p>{it.name}</p>
            <small>{`$` + it.price}</small>
          </div>
        ))}
      </div>
    </>
  );
};
