import { FC, useEffect, useState } from 'react';
import { useProducts } from '../../services';
import {
  ListProducts,
  ListProductsGrid,
  ShopSideBar,
  ShopTopBar,
} from '../components';
import { useProductStore, useSettingStore } from '../store';

export const ShopPage: FC = () => {
  // ui mode :=> zustand @global
  const [listMode, toggleList] = useSettingStore((s) => [
    s.listStyle,
    s.toggleListStyle,
  ]);

  // sorting :=> functionality
  const [sortKey, setSetKey] = useState({
    type: 'low',
    isChanged: false,
  });
  const sortBy = (type: string) => {
    setSetKey({ ...sortKey, type: type, isChanged: true });
  };

  // filtering :=> functionality
  const [filters, setFilters] = useState({
    cat: '*',
    isChanged: false,
  });
  const changeByCategory = (key: string) => {
    setFilters({ ...filters, cat: key, isChanged: true });
  };

  // fetch products
  const { data, isLoading, isFetched, isError } = useProducts(); // query
  // state manager :=> zustand @global
  const [products, setProduct, filterByCat, resetProducts, sortByProduct] =
    useProductStore((s) => [
      s.items,
      s.setItems,
      s.filterByCat,
      s.resetProducts,
      s.sortBy,
    ]);

  const resetAll = () => {
    resetProducts(data);
  };

  useEffect(() => {
    if (isFetched) {
      setProduct(data);
    }
  }, [isFetched]);

  useEffect(() => {
    if (sortKey.isChanged) {
      sortByProduct(data, sortKey.type);
      setSetKey({ ...sortKey, isChanged: false });
    }
  }, [sortKey.isChanged]);

  useEffect(() => {
    if (filters.isChanged) {
      if (filters.cat === '*') {
        setProduct(data);
      } else {
        filterByCat(filters.cat, data);
      }
      setFilters({ ...filters, isChanged: false });
    }
  }, [filters.isChanged]);

  return (
    <>
      <div className='shop_page'>
        <ShopSideBar
          classes='shop_page_sidebar'
          changeByCategory={changeByCategory}
          activeCat={filters.cat}
          resetAll={resetAll}
        />
        <div className='shop_page_area'>
          <ShopTopBar
            classes='shop_page_top'
            itemsCount={isFetched ? products?.length : 0}
            mode={listMode}
            toggler={toggleList}
            sortBy={sortBy}
          />
          <div className='shop_page_items'>
            {isLoading ? (
              <>
                <p>loading</p>
              </>
            ) : (
              <>
                {isFetched && listMode === 'grid' ? (
                  <ListProductsGrid items={products} />
                ) : (
                  <ListProducts items={products} />
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
