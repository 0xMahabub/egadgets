import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ILink {
  link: string;
  label: string;
  blank?: boolean;
  classes?: string;
}

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
