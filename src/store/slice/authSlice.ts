import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const initialState = false;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isVerified: (state, { payload }: PayloadAction<boolean>) => payload,
  },
});

export const { isVerified } = authSlice.actions;
export default authSlice.reducer;
export const authState = (state: RootState) => state.auth;
