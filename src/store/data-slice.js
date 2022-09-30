import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    fruits: [],
  },
  reducers: {
    loadData(state, action) {
      state.fruits = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
