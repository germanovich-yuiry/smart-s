import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {
    sendEmailRequest(state) {
      state.status = "loading";
    },
    sendEmailSuccess(state) {
      state.status = "succeeded";
    },
    sendEmailFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
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

export default emailSlice.reducer;
