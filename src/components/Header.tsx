/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react';
// import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import { HeadLink } from './HeadLink';

export const Header: FC = () => {
  return (
    <header className='flex w-full p-0 m-0 bg-white border-b-2 border-gray-200'>
      <nav className='items-center justify-between header__container'>
        <span className='flex items-center gap-x-2'>
          <img className='logo react' src={reactLogo} alt='react-logo' />
          <span className='font-bold text-gray-600 text-xl'>eGadgets</span>
        </span>

        <ul className='flex list-none items-center justify-end gap-x-4'>
          {links.map((l, i) => (
            <li key={i}>
              <HeadLink
                link={l.link}
                classes={l.btn ? 'btn btn-link' : 'btn'}
                blank={l.blank}
                label={l.label}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// all links as object array
const links = [
  {
    label: 'Shop',
    link: '/',
    blank: false,
    btn: false,
  },
  {
    label: 'About Us',
    link: '/about',
    blank: false,
    btn: false,
  },
  {
    label: 'Contact',
    link: '/contact',
    blank: false,
    btn: false,
  },
  {
    label: 'Cart',
    link: '/cart',
    blank: false,
    btn: true,
  },
];
