import { PayloadAction } from "@reduxjs/toolkit";
import { DataState } from "./types";
import { GameProps } from "@/components/Main/types";

export const handleInitialPending = (state: DataState) => {
  state.games = [];
  state.loading = "pending";
};
export const handleLaterPending = (state: DataState) => {
  state.loading = "pending";
};
export const handleInitialFulfilled = (
  state: DataState,
  { payload }: PayloadAction<{ next: string; results: GameProps[] }>
) => {
  state.games = payload.results;
  state.haveNext = !!payload.next;
  if (state.haveNext) {
    state.page = !!payload.next ? 2 : 1;
  }

  state.loading = "idle";
};
export const handleLaterFulfilled = (
  state: DataState,
  { payload }: PayloadAction<{ next: string; results: GameProps[] }>
) => {
  if (state.haveNext) {
    state.page += 1;
  }
  state.games = [...state.games, ...payload.results];
  state.haveNext = !!payload.next;
  state.loading = "idle";
};
