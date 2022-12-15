import { FC } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import reactLogo from '../../assets/react.svg';
import { HeadLink } from './HeadLink';

export const Header: FC = () => {
  return (
    <header className='flex w-full p-0 m-0 bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700'>
      <nav className='items-center justify-between header__container'>
        <span className='flex items-center gap-x-2'>
          <img className='logo react' src={reactLogo} alt='react-logo' />
          <span className='font-bold text-gray-600 dark:text-white text-xl'>
            eGadgets
          </span>
        </span>

        <ul className='flex list-none items-center justify-end gap-x-4'>
          <ThemeSwitch />
          {links.map((l, i) => (
            <li key={i}>
              <HeadLink
                link={l.link}
                classes={
                  l.btn
                    ? 'flex items-center justify-center btn btn-link gap-x-1 dark:text-white'
                    : 'btn flex items-center justify-center gap-x-1 dark:text-white'
                }
                blank={l.blank}
                label={l.label}
                icon={l.icon}
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
    icon: '',
  },
  {
    label: 'About Us',
    link: '/about',
    blank: false,
    btn: false,
    icon: '',
  },
  {
    label: 'Contact',
    link: '/contact',
    blank: false,
    btn: false,
    icon: '',
  },
  {
    label: 'Cart',
    link: '/cart',
    blank: false,
    btn: false,
    icon: 'bx bx-cart-alt text-2xl',
  },
];
