import { IData } from "../../types/Data.type";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDataState {
  data: IData | null;
}

const initialState: IDataState = {
  data: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IData>) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = null;
    },
  },
});

export const { setData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
