import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
};

const modalSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
