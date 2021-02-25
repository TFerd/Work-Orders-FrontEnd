import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import workerReducer from "./ducks/worker";
import workOrderReducer from "./ducks/workOrder";
import watcherSaga from "./sagas/rootSaga";

const reducer = combineReducers({
  worker: workerReducer,
  workOrder: workOrderReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

sagaMiddleware.run(watcherSaga);

export default store;
