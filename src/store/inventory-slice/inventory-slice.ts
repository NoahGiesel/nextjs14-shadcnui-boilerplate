import { createSlice } from "@reduxjs/toolkit";
import { fetchInventory, InventoryState } from "./thunk/get-inventory.thunk";
import { ITEMS_PER_PAGE } from "@/src/constants";

export interface InventorySliceState {
  inventory: InventoryState;
  currentPagination: number;
}

const initialState: InventorySliceState = {
  inventory: {
    status: "initialized",
    data: undefined,
    error: false,
  },
  currentPagination: ITEMS_PER_PAGE,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    resetInventory: (state) => {
      state.inventory = initialState.inventory;
    },
    setPagination: (state, action) => {
      state.currentPagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInventory.pending, (state) => {
      state.inventory = {
        status: "loading",
        data: null,
        error: false,
      };
    });
    builder.addCase(fetchInventory.fulfilled, (state, action) => {
      const data = action.payload;
      state.inventory = {
        status: "success",
        data: data?.data,
        error: false,
      };
    });
    builder.addCase(fetchInventory.rejected, (state) => {
      state.inventory = {
        status: "failed",
        data: null,
        error: true,
      };
    });
  },
});

export const { resetInventory, setPagination } = inventorySlice.actions;

export default inventorySlice.reducer;
