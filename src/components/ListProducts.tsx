import { FC } from 'react';
import { IProductItems } from '../interfaces';

export const ListProducts: FC<IProductItems> = ({ items }) => {
  return (
    <>
      <div className='flex gap-y-4 flex-col items-start justify-start w-full'>
        {items?.map((it, i) => (
          <div key={i} className='product_card_list'>
            <div className='product_photo'></div>
            <div className='product_info'>
              <p>{it.name}</p>
              <small>{`$` + it.price}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
