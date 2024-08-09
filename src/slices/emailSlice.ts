import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../types/Data.type";
export interface IEmailState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IEmailState = {
  status: "idle",
  error: null,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    sendEmailRequest(state, action: PayloadAction<{ userData: IData }>) {
      state.status = "loading";
    },
    sendEmailSuccess(state) {
      state.status = "succeeded";
    },
    sendEmailFailure(state, action) {
      state.status = "failed";
      state.error = action.payload.error;
    },
    resetEmailStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
});

export const {
  sendEmailRequest,
  sendEmailSuccess,
  sendEmailFailure,
  resetEmailStatus,
} = emailSlice.actions;

export type sendEmailRequestType = ReturnType<typeof sendEmailRequest>;
export type sendEmailFailureType = ReturnType<typeof sendEmailFailure>;

export default emailSlice.reducer;
