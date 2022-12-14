import { FC } from 'react';
import { useProducts } from '../../services';
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

  // fetch products
  const { isLoading, isFetched, isError, data } = useProducts();

  return (
    <>
      <div className='shop_page'>
        <ShopSideBar classes='shop_page_sidebar' />
        <div className='shop_page_area'>
          <ShopTopBar
            classes='shop_page_top'
            itemsCount={isFetched ? data?.length : 0}
            mode={listMode}
            toggler={toggleList}
          />
          <div className='shop_page_items'>
            {isLoading ? (
              <>
                <p>loading ...</p>
              </>
            ) : (
              <>
                {isFetched && listMode === 'grid' ? (
                  <ListProductsGrid items={data} />
                ) : (
                  <ListProducts items={data} />
                )}
              </>
            )}

            {isError ? (
              <>
                <p>Error!</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
