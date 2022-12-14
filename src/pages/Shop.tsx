import { FC } from 'react';
import {
  ListProducts,
  ListProductsGrid,
  ShopSideBar,
  ShopTopBar,
} from '../components';
import { useSettingStore } from '../store';

export const ShopPage: FC = () => {
  const [listMode, toggleList] = useSettingStore((s) => [
    s.listStyle,
    s.toggleListStyle,
  ]);

  return (
    <>
      <div className='shop_page'>
        <ShopSideBar classes='shop_page_sidebar' />
        <div className='shop_page_area'>
          <ShopTopBar
            classes='shop_page_top'
            mode={listMode}
            toggler={toggleList}
          />
          <div className='shop_page_items'>
            {listMode === 'grid' ? <ListProductsGrid /> : <ListProducts />}
          </div>
        </div>
      </div>
    </>
  );
};
