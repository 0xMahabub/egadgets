import { FC } from 'react';
import { IProductItems } from '../interfaces';
export const ListProductsGrid: FC<IProductItems> = ({
  items,
  addToCart,
  inCart,
}) => {
  return (
    <>
      <div className='product_grid'>
        {items?.map((it, i) => (
          <div key={i} className='product_card_grid cursor-pointer'>
            <div className='product_photo'>
              <img src={it.photo} alt={it.name} />
            </div>
            <div className='product_info'>
              <h3>{it.name}</h3>
              <div className='flex justify-between mt-2'>
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
                      Chipset:{' '}
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
                <div className='flex flex-col items-end'>
                  <button
                    onClick={() =>
                      inCart(it.id)
                        ? null
                        : addToCart({
                            id: it.id,
                            name: it.name,
                            photo: it.photo,
                            price: it.price,
                            qty: 1,
                            prop: it.prop,
                          })
                    }
                    disabled={it.qty === 0 ? true : false}
                    className={
                      inCart(it.id) ? 'btn-addcart added' : 'btn-addcart'
                    }
                    title={it.qty === 0 ? 'Not Available' : 'Add to cart'}
                  >
                    <i
                      className={
                        inCart(it.id) ? 'bx bxs-check-circle' : 'bx bx-cart-alt'
                      }
                    ></i>
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
