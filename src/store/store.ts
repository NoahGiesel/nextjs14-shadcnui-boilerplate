import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./inventory-slice/inventory-slice";

export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
