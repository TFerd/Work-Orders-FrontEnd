import { all, take, takeLatest } from "redux-saga/effects";
import { handleGetWorker } from "./handlers/worker";
import { handleGetWorkOrder } from "./handlers/workOrder";

import { GET_WORKER } from "../ducks/worker";
import { GET_WORKORDER } from "../ducks/workOrder";

function* getWorkerSaga() {
  yield takeLatest(GET_WORKER, handleGetWorker);
}

function* getWorkOrderSaga() {
  yield takeLatest(GET_WORKORDER, handleGetWorkOrder);
}

export default function* rootSaga() {
  yield all([getWorkerSaga(), getWorkOrderSaga()]);
}
