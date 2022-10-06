import { useSelector } from 'react-redux';

import Header from '../components/Layout/Header';
import Banner from '../components/Layout/Banner';
import Fruits from '../components/Fruits/Fruits';
import Cart from '../components/Cart/Cart';

const Main = () => {
  const modal = useSelector((state) => state.ui.visibleModal);

  return (
    <>
      {modal && <Cart />}
      <Header />
      <Banner />
      <Fruits />
    </>
  );
};

export default Main;
