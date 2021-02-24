import { call, put } from "redux-saga/effects";
import { setWorkOrder } from "../../ducks/workOrder";
import { requestGetWorkOrder } from "../requests/workOrder";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetWorkOrder);
    const { data } = response;

    yield put(setWorkOrder(data));
  } catch (error) {
    console.log(error);
  }
}
