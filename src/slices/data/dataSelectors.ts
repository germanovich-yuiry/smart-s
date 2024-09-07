import { createSelector } from "reselect";
import { RootState } from "../../app/store";

const selectDataState = (state: RootState) => state.data;

export const selectData = createSelector(
  [selectDataState],
  (dataState) => dataState.data
);

export const selectHasData = createSelector(
  [selectData],
  (data) => data !== null
);
