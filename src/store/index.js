import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import dataSlice from './data-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
