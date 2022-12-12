import { FC } from 'react';

export const Footer: FC = () => {
  const thisYear = new Date(Date.now()).getFullYear();
  return (
    <>
      <p className='footer'>
        <>
          &copy; {thisYear === 2022 ? thisYear : `2022 - ${thisYear}`}
          <span>
            <span>All rights reserved by </span>
            <a
              className='text-gray-500'
              href='https://github.com/0xMahabub'
              target='_blank'
              rel='noreferrer'
            >
              ./0xMahabub
            </a>
          </span>
        </>
      </p>
    </>
  );
};
