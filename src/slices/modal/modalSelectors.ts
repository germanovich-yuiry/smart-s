import { createSelector } from "reselect";
import { RootState } from "../../app/store";
import { ModalState } from "../modal/modalSlice";

export const selectModalOpen = createSelector(
  (state: RootState) => state.modal,
  (modal: ModalState) => modal.open
);
