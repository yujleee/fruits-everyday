import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import Fruits from './components/Fruits/Fruits';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Fruits />
    </Fragment>
  );
}

export default App;
