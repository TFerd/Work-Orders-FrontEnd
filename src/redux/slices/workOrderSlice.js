import { createSlice } from "@reduxjs/toolkit";

export const workOrderSlice = createSlice({
  name: "workOrder",
  initialState: {
    workOrders: null
  },
  reducers: {
    //Input: none
    //Output: List of work orders
    fetchWorkOrders: (state) => {
      state.workOrders = getWorkOrderList();
    }
  }
});

export async function getWorkOrderList() {
  const response = await fetch(
    "https://api.hatchways.io/assessment/work_orders"
  );
  const json = await response.json();
  return json;
}

export const { fetchWorkOrders } = workOrderSlice.actions;

export default workOrderSlice.reducer;
