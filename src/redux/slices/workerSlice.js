import { createSlice } from "@reduxjs/toolkit";

export const workerSlice = createSlice({
  name: "worker",
  initialState: {
    worker: null
  },
  reducers: {
    //Input: worker Id of worker to be returned
    //Output: worker object of corresponding Id
    fetchWorker: (state, action) => {
      state.worker = getWorker(action.payload);
    }
  }
});

export async function getWorker(id) {
  if (Number.isInteger(id)) {
    const response = await fetch(
      "https://api.hatchways.io/assessment/workers/" + id
    );
    const json = await response.json();
    return json;
  } else return -1;
}

export const { fetchWorker } = workerSlice.actions;

export default workerSlice.reducer;
