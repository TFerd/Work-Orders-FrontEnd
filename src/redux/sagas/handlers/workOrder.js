import { call, put } from "redux-saga/effects";
import { setWorkOrder } from "../../ducks/workOrder";
import { requestGetWorkOrder } from "../requests/workOrder";

export function* handleGetWorkOrder(action) {
  try {
    const response = yield call(requestGetWorkOrder);
    const { data } = response;

    console.log("response from getWorkOrder: ", response);
    console.log("data = ", data.orders);
    yield put(setWorkOrder(data.orders));
  } catch (error) {
    console.log(error);
  }
}
