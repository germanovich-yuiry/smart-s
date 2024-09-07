import { createSelector } from "reselect";
import { RootState } from "../../app/store";
import { IEmailState } from "./emailSlice";

const selectEmailState = (state: RootState): IEmailState => state.email;

export const selectEmailStatus = createSelector(
  [selectEmailState],
  (emailState) => emailState.status
);

export const selectEmailError = createSelector(
  [selectEmailState],
  (emailState) => emailState.error
);
