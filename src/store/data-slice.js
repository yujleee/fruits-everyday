import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    fruits: [],
  },
  reducers: {
    loadData(state, action) {
      const loadedData = action.payload.loadedData;
      state.fruits = Array.from(loadedData);
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
