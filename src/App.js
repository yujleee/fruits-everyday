import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './pages/Main';
import Order from './pages/Order';
import CheckOrders from './pages/CheckOrders';
import Checkout from './pages/Checkout';
import YourOrder from './pages/YourOrder';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<CheckOrders />} />
          <Route path="/orders/:orderId" element={<YourOrder />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
