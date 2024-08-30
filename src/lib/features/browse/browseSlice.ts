import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BrowsePropsKey, BrowseState } from "./types";
import { browseAll, browseOne, browseOneMore } from "./thunks";
import {
  handleAllFulfilled,
  handleError,
  handleLaterFulfilled,
  handleOneFulfilled,
  handlePending,
} from "./asyncStateHandlers";

const initialState: BrowseState = {
  browse: {
    platforms: {
      count: 0,
      haveNext: false,
      results: [],
    },
    genres: {
      count: 0,
      haveNext: false,
      results: [],
    },
    tags: {
      count: 0,
      haveNext: false,
      results: [],
    },
    creators: {
      count: 0,
      haveNext: false,
      results: [],
    },
    developers: {
      count: 0,
      haveNext: false,
      results: [],
    },
    publishers: {
      count: 0,
      haveNext: false,
      results: [],
    },
    stores: {
      count: 0,
      haveNext: false,
      results: [],
    },
  },
  activePath: null,
  page: 2,
  loading: "idle",
};

export const browseSlice = createSlice({
  name: "browseSlice",
  initialState,
  reducers: {
    setActivePath: (state, { payload }: PayloadAction<BrowsePropsKey | null>) => {
      state.activePath = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(browseAll.pending, handlePending);
    builder.addCase(browseAll.fulfilled, handleAllFulfilled);
    builder.addCase(browseAll.rejected, handleError);
    builder.addCase(browseOne.pending, handlePending);
    builder.addCase(browseOne.fulfilled, handleOneFulfilled);
    builder.addCase(browseOne.rejected, handleError);
    builder.addCase(browseOneMore.pending, handlePending);
    builder.addCase(browseOneMore.fulfilled, handleLaterFulfilled);
    builder.addCase(browseOneMore.rejected, handleError);
  },
});

export const { setActivePath } = browseSlice.actions;

export default browseSlice.reducer;
