import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrowsePropsKey, BrowseState } from "./types";

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

export const browseAll = createAsyncThunk("browseAll", async () => {
  const response = await fetch(`/api/browseAll?`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const fetchOne = createAsyncThunk("fetchOne", async ({ path }: { path: string }) => {
  const response = await fetch(`/api/${path}?page=1`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const fetchOneMore = createAsyncThunk("fetchOneMore", async ({ page, path }: { page: number; path: string }) => {
  const response = await fetch(`/api/${path}?page=${page}`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const browseSlice = createSlice({
  name: "browseSlice",
  initialState,
  reducers: {
    setActivePath: (state, { payload }: PayloadAction<BrowsePropsKey | null>) => {
      state.activePath = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(browseAll.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      browseAll.fulfilled,
      (state, { payload }: PayloadAction<{ count: number; next: string; results: [] }[]>) => {
        const [platforms, genres, tags, creators, developers, publishers, stores] = payload;
        state.browse["platforms"] = { count: platforms.count, haveNext: !!platforms.next, results: platforms.results };
        state.browse["genres"] = { count: genres.count, haveNext: !!genres.next, results: genres.results };
        state.browse["tags"] = { count: tags.count, haveNext: !!tags.next, results: tags.results };
        state.browse["creators"] = { count: creators.count, haveNext: !!creators.next, results: creators.results };
        state.browse["developers"] = {
          count: developers.count,
          haveNext: !!developers.next,
          results: developers.results,
        };
        state.browse["publishers"] = {
          count: publishers.count,
          haveNext: !!publishers.next,
          results: publishers.results,
        };
        state.browse["stores"] = { count: stores.count, haveNext: !!stores.next, results: stores.results };

        state.loading = "idle";
      }
    );
    builder.addCase(fetchOne.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchOne.fulfilled,
      (state, { payload }: PayloadAction<{ count: number; next: string; results: [] }>) => {
        const path = state.activePath as BrowsePropsKey;
        state.browse[path] = { count: payload.count, haveNext: !!payload.next, results: payload.results };

        state.loading = "idle";
      }
    );
    builder.addCase(fetchOneMore.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchOneMore.fulfilled,
      (state, { payload }: PayloadAction<{ count: number; next: string; results: [] }>) => {
        if (state.activePath) {
          state.browse[state.activePath].results = [...state.browse[state.activePath].results, ...payload.results];
          state.browse[state.activePath].haveNext = !!payload.next;
          state.page++;
        }

        state.loading = "idle";
      }
    );
  },
});

export const { setActivePath } = browseSlice.actions;

export default browseSlice.reducer;
