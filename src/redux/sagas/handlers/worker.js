import { call, put } from "redux-saga/effects";
import { setWorker } from "../../ducks/worker";
import { requestGetWorker } from "../requests/worker";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetWorker, action.payload);
    const { data } = response;

    yield put(setWorker(data));
  } catch (error) {
    console.log(error);
  }
}
