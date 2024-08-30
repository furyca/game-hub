import { PayloadAction } from "@reduxjs/toolkit";
import { BrowsePropsKey, BrowseState } from "./types";

export const handlePending = (state: BrowseState) => {
  state.loading = "pending";
};
export const handleError = (state: BrowseState) => {
  state.loading = "error";
};
export const handleAllFulfilled = (
  state: BrowseState,
  { payload }: PayloadAction<{ count: number; next: string; results: [] }[]>
) => {
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
};

export const handleOneFulfilled = (
  state: BrowseState,
  { payload }: PayloadAction<{ count: number; next: string; results: [] }>
) => {
  const path = state.activePath as BrowsePropsKey;
  state.browse[path] = { count: payload.count, haveNext: !!payload.next, results: payload.results };

  state.loading = "idle";
};

export const handleLaterFulfilled = (state: BrowseState, { payload }: PayloadAction<{ count: number; next: string; results: [] }>) => {
  if (state.activePath) {
    state.browse[state.activePath].results = [...state.browse[state.activePath].results, ...payload.results];
    state.browse[state.activePath].haveNext = !!payload.next;
    state.page++;
  }

  state.loading = "idle";
}