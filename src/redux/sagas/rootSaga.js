import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { handleGetWorker } from "./handlers/worker";
import { handleGetWorkOrder } from "./handlers/workOrder";

import { GET_WORKER } from "../ducks/worker";
import { GET_WORKORDER } from "../ducks/workOrder";

//I dont think the workerId actually does anything here...
//I mean, look at the yield all in root function, it doesnt put a param
function* getWorkerSaga(workerId) {
  console.log("getWorkerSaga initialized...workerId is", workerId);
  // yield takeEvery(GET_WORKER, handleGetWorker, workerId);
  try {
    const data = yield call(handleGetWorker, workerId);
    console.log("Data:", data);
    yield put({ type: "GET_WORKER_SUCCEEDED", data });
  } catch (error) {
    yield put({ type: "GET_WORKER_FAILED", error });
  }
}

function* watchGetWorkerSaga() {
  yield takeEvery(GET_WORKER, getWorkerSaga);
}

function* getWorkOrderSaga() {
  console.log("getWorkOrderSaga initialized");
  yield takeLatest(GET_WORKORDER, handleGetWorkOrder);
}

export default function* rootSaga() {
  yield all([watchGetWorkerSaga(), getWorkOrderSaga()]);
}
