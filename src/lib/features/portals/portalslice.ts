import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { PortalState } from "./types";

const initialState: PortalState = {
  activePortal: null,
  dialog: null,
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
    clearPortal: (state) => {
      state.activePortal = null;
    },
    clearDialog: (state) => {
      state.dialog = null;
    },
  },
});

export const { setPortal, setDialog, clearPortal, clearDialog } = portalSlice.actions;

export const setActive = (state: RootState) => state.portal.activePortal;

export default portalSlice.reducer;
