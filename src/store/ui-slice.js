import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    visibleModal: false,
  },
  reducers: {
    toggleModal(state) {
      state.visibleModal = !state.visibleModal;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
