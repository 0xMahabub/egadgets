import { FC } from 'react';
import { Header } from './components';
import { Footer } from './components';

interface ILayout {
  children: JSX.Element;
}

const AppLayout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='container content'>{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
