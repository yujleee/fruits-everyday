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
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          onePiece: newItem.onePiece,
          quantity: newItem.quantity,
          image: newItem.image,
        });

        state.totalPrice = state.totalPrice + newItem.onePiece;
      } else {
        existingItem.price = existingItem.price + existingItem.onePiece;
        existingItem.quantity++;
        state.totalPrice = state.totalPrice + existingItem.onePiece;
      }
    },

    removeToCart(state, action) {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.price = existingItem.price - existingItem.onePiece;
      }
      existingItem.quantity--;
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existingItem.onePiece;

      if (state.totalQuantity === 0) {
        state.totalPrice = 0;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
