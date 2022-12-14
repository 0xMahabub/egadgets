import { FC } from 'react';
import { useCatagory } from '../../services';

interface IShopSide {
  classes?: string;
}

export const ShopSideBar: FC<IShopSide> = ({ classes }) => {
  const categories = useCatagory();

  return (
    <div className={classes}>
      <div className='search'>
        <input type='text' placeholder='Search ...' className='psearch' />
      </div>

      <div className='cats'>
        <strong>category</strong>

        <ul className='menu_list'>
          {categories.isFetched
            ? categories.data?.map((c, i) => <li key={i}>{c.name}</li>)
            : null}
        </ul>
      </div>

      <div className='price'>
        <strong>price</strong>

        <input type='range' placeholder='1000' className='ranger' />
        <div className='range_input'>
          <input type='text' placeholder='0' />
          <input type='text' placeholder='5000' />
        </div>
      </div>

      <div className='bottom_part'>
        <span>
          <label htmlFor='shipCheck'>free shipping</label>
          <input type='checkbox' name='shipCheck' id='shipCheck' />
        </span>

        <button className='btn-clr'>clear filters</button>
      </div>
    </div>
  );
};
