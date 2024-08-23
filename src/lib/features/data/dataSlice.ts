import { GameProps } from "@/components/Main/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataState } from "./types";

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
  },
  isCalendar: false,
  haveNext: false,
  activeQuery: null,
  page: 1,
  loading: "idle",
};

export const fetchGames = createAsyncThunk("fetchGames", async (filter: string) => {
  const response = await fetch(`/api/fetchGames?${filter}&`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const fetchMore = createAsyncThunk("fetchMore", async ({ filter, page }: { filter: string; page: number }) => {
  const response = await fetch(`/api/fetchGames?${filter}&page=${page}&`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const searchGames = createAsyncThunk("searchGames", async ({ query }: { query: string }) => {
  const response = await fetch(`/api/fetchGames?search=${query}&`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const searchMore = createAsyncThunk("searchMore", async ({ query, page }: { query: string; page: number }) => {
  const response = await fetch(`/api/fetchGames?search=${query}&page=${page}&`);

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
      state.filter = {
        ...state.filter,
        parent_platforms: { id: null, name: null, value: null },
        platforms: { id: payload.id, name: payload.name, value: payload.value },
      };
      state.page = 1;
      state.games = [];
    },
    setParentPlatforms: (state, { payload }) => {
      state.filter = {
        ...state.filter,
        parent_platforms: { id: payload.id, name: payload.name, value: payload.value },
        platforms: { id: null, name: null, value: null },
      };
      state.page = 1;
      state.games = [];
    },
    setDates: (state, { payload }) => {
      state.filter = { ...state.filter, dates: { name: payload.name, value: payload.value } };
      state.page = 1;
      state.games = [];
    },
    setOrdering: (state, { payload }) => {
      state.filter = { ...state.filter, ordering: { name: payload.name, value: payload.value } };
      state.page = 1;
      state.games = [];
    },
    setQuery: (state, { payload }) => {
      state.activeQuery = payload;
    },
    setCalendar: (state, { payload }) => {
      state.isCalendar = payload;
    },
    clearQuery: (state) => {
      state.activeQuery = null;
    },
    clearAllFilters: (state) => {
      state.filter = initialState.filter;
      state.isCalendar = false;
      state.page = 1;
    },
    clearAllPlatforms: (state) => {
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
    builder.addCase(fetchGames.pending, (state) => {
      state.games = [];
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
      state.loading = "pending";
    });
    builder.addCase(
      fetchMore.fulfilled,
      (state, { payload }: PayloadAction<{ next: string; results: GameProps[] }>) => {
        if (state.haveNext) {
          state.page += 1;
        }
        state.games = [...state.games, ...payload.results];
        state.haveNext = !!payload.next;
        state.loading = "idle";
      }
    );
    builder.addCase(searchGames.pending, (state) => {
      state.games = [];
      state.loading = "pending";
    });
    builder.addCase(
      searchGames.fulfilled,
      (state, { payload }: PayloadAction<{ next: string; results: GameProps[] }>) => {
        state.games = payload.results;
        state.haveNext = !!payload.next;
        if (state.haveNext) {
          state.page = !!payload.next ? 2 : 1;
        }
        state.loading = "idle";
      }
    );
    builder.addCase(searchMore.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      searchMore.fulfilled,
      (state, { payload }: PayloadAction<{ next: string; results: GameProps[] }>) => {
        if (state.haveNext) {
          state.page += 1;
        }
        state.games = [...state.games, ...payload.results];
        state.haveNext = !!payload.next;
        state.loading = "idle";
      }
    );
  },
});

export const {
  setPlatforms,
  setParentPlatforms,
  setDates,
  setOrdering,
  clearAllFilters,
  setQuery,
  setCalendar,
  clearQuery,
  clearAllPlatforms,
  clearDates,
} = dataSlice.actions;

export default dataSlice.reducer;
