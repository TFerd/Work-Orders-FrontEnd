import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./slices/workerSlice";
import workOrderReducer from "./slices/workOrderSlice";

export default configureStore({
  reducer: {
    worker: workerReducer,
    workOrder: workOrderReducer
  }
});
