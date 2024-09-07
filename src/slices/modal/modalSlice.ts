import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  open: boolean;
}

const initialState: ModalState = {
  open: false,
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
