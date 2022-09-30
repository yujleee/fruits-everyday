import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
  },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
