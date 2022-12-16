import { ChangeEvent, FC, useRef, useState } from 'react';
import { useCatagory } from '../../services';
import { IShopSide } from '../interfaces';

export const ShopSideBar: FC<IShopSide> = ({
  classes,
  activeCat,
  changeByCategory,
  resetAll,
  search,
}) => {
  const categories = useCatagory(); // query (react-query)
  // const [price, setPrice] = useState({ min: 0, max: 2000 });
  // console.log('--->>>  => ', price);

  // const handlePriceRange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPrice({ ...price, [e.target.id]: Number(e.target.value) });
  // };

  // const si = useRef<HTMLInputElement | null>(null);
  // const minP = useRef<HTMLInputElement>(null);
  // const maxP = useRef<HTMLInputElement>(null);

  // reset button
  const allReset = () => {
    resetAll();
    // si.current?.value = '';
    // minP.current?.value = '';
    // maxP.current?.value = '';
  };

  return (
    <div className={classes}>
      <div className='search'>
        <input
          defaultValue={''}
          onChange={(e) => {
            setTimeout(() => search(e.target.value), 500); // .5s delay
          }}
          type='text'
          name='search'
          autoComplete='off'
          placeholder='Search ...'
          className='psearch'
        />
      </div>

      <div className='cats'>
        <strong>category</strong>

        <ul className='menu_list'>
          {categories.isFetched ? (
            <>
              <button
                onClick={() => changeByCategory('*')}
                className={
                  activeCat === '*' ? 'capitalize active' : 'capitalize'
                }
              >
                all categories
              </button>
              {categories.data?.map((c, i) => (
                <button
                  onClick={() => changeByCategory(c.code)}
                  key={i}
                  className={activeCat === c.code ? 'active' : ''}
                >
                  {c.name}
                </button>
              ))}
            </>
          ) : null}
        </ul>
      </div>

      <div className='price'>
        {/* <strong>price</strong> */}

        {/* <input type='range' placeholder='1000' className='ranger' /> */}
        {/* <div className='range_input'>
          <input
            type='text'
            id='min'
            placeholder='0'
            defaultValue={price.min}
            onChange={handlePriceRange}
            ref={minP}
          />
          <span className='text-gray-400'>to</span>
          <input
            type='text'
            id='max'
            placeholder='5000'
            defaultValue={price.max}
            onChange={handlePriceRange}
            ref={maxP}
          />
        </div> */}
      </div>

      <div className='bottom_part'>
        <span>
          <label htmlFor='shipCheck'>free shipping</label>
          <input type='checkbox' name='shipCheck' id='shipCheck' />
        </span>

        <button className='btn-clr' onClick={() => allReset()}>
          clear filters
        </button>
      </div>
    </div>
  );
};
