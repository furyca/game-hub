import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

export const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.searchInput = payload;
    },
    clearInput: (state) => {
      state.searchInput = "";
    },
  },
});

export const { setInput, clearInput } = inputSlice.actions;

export default inputSlice.reducer;
