import { useSelector } from 'react-redux';

import Header from '../components/Layout/Header';
import Fruits from '../components/Fruits/Fruits';
import Cart from '../components/Cart/Cart';

const Main = () => {
  const modal = useSelector((state) => state.modal.isVisible);

  return (
    <>
      {modal && <Cart />}
      <Header />
      <Fruits />
    </>
  );
};

export default Main;
