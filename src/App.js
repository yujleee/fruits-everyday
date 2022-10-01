import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Layout/Header';
import Fruits from './components/Fruits/Fruits';
import Cart from './components/Cart/Cart';

import './App.css';

function App() {
  const modal = useSelector((state) => state.modal.isVisible);

  return (
    <Fragment>
      {modal && <Cart />}
      <Header />
      <Fruits />
    </Fragment>
  );
}

export default App;
