import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { fetchInitialGames, fetchMoreGames, searchGames, searchMoreGames } from "./thunks";
import { handleInitialFulfilled, handleInitialPending, handleLaterFulfilled, handleLaterPending } from "./asyncStateHandlers";

const initialState: DataState = {
  games: [],
  filter: {
    parent_platforms: {
      id: null,
      name: null,
      value: null,
    },
    platforms: {
      id: null,
      name: null,
      value: null,
    },
    dates: {
      name: null,
      value: "2024-01-01,2024-12-31",
    },
    ordering: {
      name: "Relevance",
      value: null,
    },
    genres: {
      name: "",
      value: ""
    }
  },
  isCalendar: false,
  haveNext: false,
  page: 1,
  loading: "idle",
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filter = {
        ...state.filter,
        ...payload,
      };
      state.page = 1;
      state.games = [];
    },
    setCalendar: (state, { payload }) => {
      state.isCalendar = payload;
    },
    clearAllFilters: (state) => {
      state.filter = initialState.filter;
      state.page = 1;
    },
    clearPlatforms: (state) => {
      state.filter = {
        ...state.filter,
        parent_platforms: { id: null, name: null, value: null },
        platforms: { id: null, name: null, value: null },
      };
      state.page = 1;
    },
    clearDates: (state) => {
      state.filter = { ...state.filter, dates: { name: null, value: null } };
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialGames.pending, handleInitialPending);
    builder.addCase(fetchInitialGames.fulfilled, handleInitialFulfilled);
    builder.addCase(fetchMoreGames.pending, handleLaterPending);
    builder.addCase(fetchMoreGames.fulfilled, handleLaterFulfilled);
    builder.addCase(searchGames.pending, handleInitialPending);
    builder.addCase(searchGames.fulfilled, handleInitialFulfilled);
    builder.addCase(searchMoreGames.pending, handleLaterPending);
    builder.addCase(searchMoreGames.fulfilled, handleLaterFulfilled);
  },
});

export const { setFilters, setCalendar, clearAllFilters, clearPlatforms, clearDates } = dataSlice.actions;

export default dataSlice.reducer;
