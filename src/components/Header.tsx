import { FC } from 'react';
import reactLogo from '../assets/react.svg';

export const Header: FC = () => {
  const links = [
    {
      label: 'github',
      link: 'https://github.com/0xMahabub/listing',
      blank: true,
      btn: false,
    },
    {
      label: 'github',
      link: 'https://github.com/0xMahabub/listing',
      blank: true,
      btn: false,
    },
    {
      label: 'github',
      link: 'https://github.com/0xMahabub/listing',
      blank: true,
      btn: false,
    },
    {
      label: 'github',
      link: 'https://github.com/0xMahabub/listing',
      blank: false,
      btn: true,
    },
  ];

  return (
    <header className='flex w-full p-0 m-0 bg-white border-b-2 border-gray-200'>
      <nav className='items-center justify-between header__container'>
        <span className='flex items-center gap-x-2'>
          <img className='logo react' src={reactLogo} alt='react-logo' />
          <span className='font-bold text-gray-600 text-xl'>
            Listing React App.
          </span>
        </span>

        <ul className='flex list-none items-center justify-end gap-x-4'>
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.link}
                className={l.btn ? 'btn btn-link' : 'btn'}
                target={l.blank ? '_blank' : '_self'}
                rel='noreferrer'
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
