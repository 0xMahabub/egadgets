import { FC } from 'react';
import { IProductItems } from '../interfaces';
export const ListProductsGrid: FC<IProductItems> = ({ items }) => {
  return (
    <>
      <div className='product_grid'>
        {items?.map((it, i) => (
          <div key={i} className='product_card_grid'>
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
