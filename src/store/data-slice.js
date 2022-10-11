import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    fruits: [],
    userOrder: {},
  },
  reducers: {
    loadData(state, action) {
      const loadedData = action.payload.loadedData;
      state.fruits = Array.from(loadedData);
    },

    loadUserOrder(state, action) {
      const loadedData = action.payload.userOrder;
      state.userOrder = { ...loadedData };
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
