import { configureStore } from "@reduxjs/toolkit";
import visualslice from "./features/visuals/visualslice";
import portalslice from "./features/portals/portalslice";
import filterSlice from "./features/filters/filterslice";
import dataSlice from "./features/data/dataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      visual: visualslice,
      portal: portalslice,
      filter: filterSlice,
      data: dataSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
