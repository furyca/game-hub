import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { PortalState } from "./types";

const initialState: PortalState = {
  activePortal: null,
  dialog: null,
  header: "New and trending",
  subHeader: "Based on player counts and release date"
};

export const portalSlice = createSlice({
  name: "portalSlice",
  initialState,
  reducers: {
    setPortal: (state, { payload }) => {
      state.activePortal = payload;
    },
    setDialog: (state, { payload }) => {
      state.dialog = payload;
    },
    setHeader: (state, { payload }) => {
      state.header = payload.header;
      state.subHeader = payload.subHeader;
    },
    clearPortal: (state) => {
      state.activePortal = null;
    },
    clearDialog: (state) => {
      state.dialog = null;
    },
  },
});

export const { setPortal, setDialog, clearPortal, clearDialog, setHeader } = portalSlice.actions;

export const setActive = (state: RootState) => state.portal.activePortal;

export default portalSlice.reducer;
