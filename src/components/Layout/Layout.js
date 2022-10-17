import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Cart from '../Cart/Cart';
import styled from 'styled-components';

const Layout = () => {
  const modal = useSelector((state) => state.ui.visibleModal);

  return (
    <>
      {modal && <Cart />}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;
