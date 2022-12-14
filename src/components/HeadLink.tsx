import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILink } from '../interfaces';

export const HeadLink: FC<ILink> = ({ link, label, blank, classes }) => {
  return (
    <Link
      className={classes ? classes : ''}
      target={blank ? '_blank' : '_self'}
      to={link}
    >
      {label}
    </Link>
  );
};
