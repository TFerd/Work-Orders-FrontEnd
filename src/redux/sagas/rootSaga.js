import { all, take, takeLatest } from "redux-saga/effects";
import { handleGetWorker } from "./handlers/worker";
import { handleGetWorkOrder } from "./handlers/workOrder";

import { GET_WORKER } from "../ducks/worker";
import { GET_WORKORDER } from "../ducks/workOrder";

//I dont think the workerId actually does anything here...
//I mean, look at the yield all in root function, it doesnt put a param
function* getWorkerSaga(workerId) {
  yield takeLatest(GET_WORKER, handleGetWorker, workerId);
}

function* getWorkOrderSaga() {
  yield takeLatest(GET_WORKORDER, handleGetWorkOrder);
}

export default function* rootSaga() {
  yield all([getWorkerSaga(), getWorkOrderSaga()]);
}
