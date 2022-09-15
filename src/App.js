import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import FruitsItem from './components/Fruits/FruitsItem';

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <FruitsItem />
    </Fragment>
  );
}

export default App;
