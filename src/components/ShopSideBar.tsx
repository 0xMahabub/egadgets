import { FC } from 'react';
import { useCatagory } from '../../services';
import { IShopSide } from '../interfaces';
import { SearchInput } from './SearchInput';

export const ShopSideBar: FC<IShopSide> = ({
  classes,
  activeCat,
  changeByCategory,
  resetAll,
  search,
}) => {
  const categories = useCatagory(); // query (react-query)

  // reset button
  const allReset = () => {
    resetAll();
  };

  return (
    <div className={classes}>
      <div className='search'>
        <SearchInput searchFn={search} />
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
