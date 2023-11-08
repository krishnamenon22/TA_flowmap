import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  sideBarToggle: boolean;
};

const initialState: InitialState = {
  sideBarToggle: false
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    setsideBarToggle(state, action: PayloadAction<any>) {
      state.sideBarToggle = action.payload;
    },
  },
});

export const { setsideBarToggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
