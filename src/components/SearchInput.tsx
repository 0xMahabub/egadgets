import { FC } from 'react';
import { ISearch } from '../interfaces';

export const SearchInput: FC<ISearch> = ({ searchFn }) => {
  return (
    <input
      defaultValue={''}
      onChange={(e) => {
        setTimeout(() => searchFn(e.target.value), 500); // .5s delay
      }}
      type='text'
      name='search'
      autoComplete='off'
      placeholder='Search ...'
      className='psearch'
    />
  );
};
