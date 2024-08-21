import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { VisualState } from "./types";

const initialState: VisualState = {
  masonry: true,
};

export const visualSlice = createSlice({
  name: "visualSlice",
  initialState,
  reducers: {
    masonryOn: (state) => {
      state.masonry = true;
    },
    masonryOff: (state) => {
      state.masonry = false;
    },
  },
});

export const { masonryOn, masonryOff } = visualSlice.actions;

export const setMasonry = (state: RootState) => state.visual.masonry;

export default visualSlice.reducer;
