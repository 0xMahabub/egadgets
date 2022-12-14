import { FC } from 'react';
import { IShopTop } from '../interfaces';

export const ShopTopBar: FC<IShopTop> = ({
  mode,
  toggler,
  sortBy,
  sortKey,
  classes,
  itemsCount,
}) => {
  return (
    <div className={classes}>
      <div className='topbar_left'>
        <span>
          <button
            onClick={() => toggler()}
            className={mode === 'grid' ? 'btn-active' : ''}
          >
            <i className='bx bx-grid-alt'></i>
          </button>

          <button
            onClick={() => toggler()}
            className={mode === 'list' ? 'btn-active' : ''}
          >
            <i className='bx bx-list-ul'></i>
          </button>
        </span>

        <p>{itemsCount} products found</p>
      </div>
      <div></div>
      <div className='topbar_right'>
        <span className='capitalize text-gray-500'>sort by : </span>
        <select
          name='sortby'
          id='sortBy'
          onChange={(e) => sortBy(e.target.value)}
          defaultValue={sortKey}
        >
          <option value='low'>Price (Low)</option>
          <option value='high'>Price (High)</option>
          <option value='a2z'>Name (A-Z)</option>
          <option value='z2a'>Name (Z-A)</option>
        </select>
      </div>
    </div>
  );
};
