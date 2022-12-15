import { FC } from 'react';
import { IProductItems } from '../interfaces';

export const ListProducts: FC<IProductItems> = ({ items }) => {
  return (
    <>
      <div className='flex gap-y-4 flex-col items-start justify-start w-full'>
        {items?.map((it, i) => (
          <div key={i} className='product_card_list cursor-pointer'>
            <div className='product_photo'>
              <img src={it.photo} alt={it.name} />
            </div>
            <div className='product_info'>
              <h3>{it.name}</h3>
              <div className='flex flex-col mt-2 h-full'>
                <div className='flex flex-col'>
                  <span>
                    Price:{' '}
                    <span className='text-red-500 dark:bg-gray-600 dark:text-yellow-300 rounded-sm dark:p-1 font-semibold'>
                      {`$` + it.price}
                    </span>
                  </span>
                  <p>Qty: {it.qty}</p>
                  {it.prop.variant ? <p>Variant: {it.prop.variant}</p> : null}
                  {it.prop.color ? <p>Color: {it.prop.color}</p> : null}
                  {it.prop.chipset ? (
                    <p className='capitalize'>
                      Chipset {'/'} Processor:{' '}
                      <span className='font-bold'>{it.prop.chipset}</span>
                    </p>
                  ) : null}
                  {it.category.includes('laptop') ? (
                    <>
                      {it.prop.ram ? (
                        <>
                          <p>RAM: {it.prop.ram} GB</p>
                          {it.prop.cores ? <p>Cores: {it.prop.cores}</p> : null}
                        </>
                      ) : null}
                    </>
                  ) : null}
                  <small>Rating: {it.rating + ' / 5'}</small>
                </div>
                <div className='flex flex-col justify-end mt-auto'>
                  <button
                    disabled={it.qty === 0 ? true : false}
                    className='flex rounded-md items-center capitalize py-2 px-5 dark:bg-gray-700 bg-gray-100  text-gray-600 dark:text-white gap-x-4 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white'
                    title={it.qty === 0 ? 'Not Available' : 'Add to cart'}
                  >
                    <span>add to cart</span>
                    <i className='bx bx-cart-alt text-2xl'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
