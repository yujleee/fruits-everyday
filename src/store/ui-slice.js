import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    visibleModal: false,
    activeCart: false,
  },
  reducers: {
    toggleModal(state) {
      state.visibleModal = !state.visibleModal;
    },

    cartActive(state) {
      state.activeCart = true;
    },

    cartDisabled(state) {
      state.activeCart = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
