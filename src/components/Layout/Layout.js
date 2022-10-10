import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Cart from '../Cart/Cart';
import classes from './Layout.module.css';

const Layout = () => {
  const modal = useSelector((state) => state.ui.visibleModal);

  return (
    <>
      {modal && <Cart />}
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
