import { ENDPOINT_URL } from "@/src/constants";
import { Inventory, Status } from "@/src/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface InventoryState {
  status: Status;
  data: Inventory[] | undefined | null;
  error: boolean;
}

export interface inventoryQueryParams {}

const fetchInventory = createAsyncThunk("fetchInventory", async (params) => {
  try {
    const response = await fetch(`${ENDPOINT_URL}/inventory`);
    if (!response.ok) {
      return { status: "error", data: null, error: true };
    }
    const data = await response.json();
    return { status: "success", data, error: false };
  } catch (error) {
    return { status: "error", data: null, error: true };
  }
});

export { fetchInventory };
