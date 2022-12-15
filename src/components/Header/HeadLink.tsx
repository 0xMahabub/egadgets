import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILink } from '../../interfaces';

export const HeadLink: FC<ILink> = ({ link, label, blank, classes, icon }) => {
  return (
    <Link
      className={classes ? classes : ''}
      target={blank ? '_blank' : '_self'}
      to={link}
    >
      <span className='dark:text-white inline-block'>
        {icon && icon.length > 0 ? <i className={icon}></i> : null}
      </span>
      <span>{label}</span>
    </Link>
  );
};
