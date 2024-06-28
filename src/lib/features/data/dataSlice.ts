import { GameProps } from "@/components/Main/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";

const initialState: DataState = {
  games: [],
  filter: {
    parent_platforms: null,
    platforms: null,
    dates: "2024-01-01,2024-12-31",
    ordering: null,
  },
  haveNext: false,
  page: 1,
  loading: "idle",
  loadingMore: "idle"
};

export const fetchGames = createAsyncThunk("fetchGames", async (filter: string) => {
  const response = await fetch(`/api/fetchGames?${filter}`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const fetchMore = createAsyncThunk("fetchMore", async ({ filter, page }: { filter: string; page: number }) => {
  const response = await fetch(`/api/fetchGames?${filter}&page=${page}`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setPlatforms: (state, { payload }) => {
      state.filter = { ...state.filter, parent_platforms: null, platforms: payload };
      state.page = 1;
      state.games = [];
    },
    setParentPlatforms: (state, { payload }) => {
      state.filter = { ...state.filter, parent_platforms: payload, platforms: null };
      state.page = 1;
      state.games = [];
    },
    setDates: (state, { payload }) => {
      state.filter = { ...state.filter, dates: payload };
      state.page = 1;
      state.games = [];
    },
    setOrdering: (state, { payload }) => {
      state.filter = { ...state.filter, ordering: payload };
      state.page = 1;
      state.games = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchGames.fulfilled,
      (state, { payload }: PayloadAction<{ next: string; results: GameProps[] }>) => {
        state.games = payload.results;
        state.haveNext = !!payload.next;
        if (state.haveNext) {
          state.page = !!payload.next ? 2 : 1;
        }
        state.loading = "idle";
      }
    );
    builder.addCase(fetchMore.pending, (state) => {
      state.loadingMore = "pending";
    });
    builder.addCase(
      fetchMore.fulfilled,
      (state, { payload }: PayloadAction<{ next: string; results: GameProps[] }>) => {
        if (state.haveNext) {
          state.page += 1;
        }
        state.games = [...state.games, ...payload.results];
        state.haveNext = !!payload.next;
        state.loadingMore = "idle";
      }
    );
  },
});

export const { setPlatforms, setParentPlatforms, setDates, setOrdering } = dataSlice.actions;

export default dataSlice.reducer;
