import { configureStore } from "@reduxjs/toolkit";
import visualslice from "./features/visuals/visualslice";
import portalslice from "./features/portals/portalslice";
import dataSlice from "./features/data/dataSlice";
import inputSlice from "./features/input/inputSlice";
import browseSlice from "./features/browse/browseSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      visual: visualslice,
      portal: portalslice,
      data: dataSlice,
      input: inputSlice,
      browse: browseSlice
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
