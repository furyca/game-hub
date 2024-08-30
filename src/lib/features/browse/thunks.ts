import { createAsyncThunk } from "@reduxjs/toolkit";

export const browseAll = createAsyncThunk("browseAll", async () => {
  const response = await fetch(`/api/browseAll?`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const browseOne = createAsyncThunk("browseOne", async ({ path }: { path: string }) => {
  const response = await fetch(`/api/${path}?page=1`);

  if (!response.ok) {
    throw new Error("Response error");
  }

  return await response.json();
});

export const browseOneMore = createAsyncThunk(
  "browseOneMore",
  async ({ page, path }: { page: number; path: string }) => {
    const response = await fetch(`/api/${path}?page=${page}`);

    if (!response.ok) {
      throw new Error("Response error");
    }

    return await response.json();
  }
);