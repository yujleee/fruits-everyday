import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.price = existingItem.price + newItem.price;
      }

      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQuantity = state.totalQuantity + newItem.quantity;
    },
    removeToCart() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
