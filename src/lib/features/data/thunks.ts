import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchGames = async (endpoint: string) => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Response error");
  }

  const data = await response.json();

  return {
    next: data.next,
    results: data.results,
  };
};

export const fetchInitialGames = createAsyncThunk("fetchInitialGames", async (filter: string) => {
  return fetchGames(`/api/fetchGames?${filter}&page_size=10`);
});

export const fetchMoreGames = createAsyncThunk(
  "fetchMoreGames",
  async ({ filter, page }: { filter: string; page: number }) => {
    return fetchGames(`/api/fetchGames?${filter}&page=${page}`);
  }
);

export const searchGames = createAsyncThunk("searchGames", async ({ query }: { query: string }) => {
  return fetchGames(`/api/fetchGames?search=${query}`);
});

export const searchMoreGames = createAsyncThunk(
  "searchMoreGames",
  async ({ query, page }: { query: string; page: number }) => {
    return fetchGames(`/api/fetchGames?search=${query}&page=${page}`);
  }
);
