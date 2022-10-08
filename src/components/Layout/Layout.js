import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Cart from '../Cart/Cart';

const Layout = () => {
  const modal = useSelector((state) => state.ui.visibleModal);

  return (
    <>
      {modal && <Cart />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
