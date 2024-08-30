import { createSlice } from "@reduxjs/toolkit";
import { SearchData } from "./types";

const initialState: SearchData = {
  searchInput: "",
  activeQuery: "",
};

export const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.searchInput = payload;
    },
    setQuery: (state, { payload }) => {
      state.activeQuery = payload;
    },
    clearQuery: (state) => {
      state.activeQuery = "";
      state.searchInput = "";
    },
  },
});

export const { setInput, setQuery, clearQuery } = inputSlice.actions;

export default inputSlice.reducer;
