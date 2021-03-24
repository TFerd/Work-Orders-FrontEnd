import { call, put } from "redux-saga/effects";
import { setWorker } from "../../ducks/worker";
import { requestGetWorker } from "../requests/worker";

//called by:
export function* handleGetWorker(action) {
  console.log("handle get user, payload:", action.payload);
  try {
    const response = yield call(requestGetWorker, action.payload);
    const { data } = response;

    console.log("Setting worker to:", data);
    yield put(setWorker(data));
  } catch (error) {
    console.log(error);
  }
}
