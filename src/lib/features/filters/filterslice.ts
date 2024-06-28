import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "./types";

const initialState: FilterState = {
  order: "Relevance",
  date:  null,
  platform: null,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setOrderName: (state, { payload }) => {
      state.order = payload;
    },
    setDateName: (state, { payload }) => {
      state.date = payload;
    },
    setPlatformName: (state, { payload }) => {
      state.platform = payload;
    },
  },
});

export const { setOrderName, setDateName, setPlatformName } = filterSlice.actions;

export default filterSlice.reducer;
