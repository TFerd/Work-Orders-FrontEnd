//Exporting because these are used by the watcher sagas
export const GET_WORKORDER = "GET_WORKORDER";
const SET_WORKORDER = "SET_WORKORDER";
const SET_WORKER_TO_ORDER = "SET_WORKER_TO_ORDER";

// export const setWorkOrder = (workOrderId) => ({
//   type: GET_WORKORDER,
//   payload: workOrderId
// });

export const getWorkOrder = () => ({
  type: GET_WORKORDER
});

export const setWorkOrder = (workOrder) => ({
  type: SET_WORKORDER,
  workOrder
});

export const setWorkerToOrder = (worker) => ({
  type: SET_WORKER_TO_ORDER,
  worker
});

//States in this duck and their initial values
const initialState = {
  workOrder: undefined,
  worker: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKORDER:
      const { workOrder } = action;
      console.log("setting workorder to ", workOrder);
      return { ...state, workOrder };
    case SET_WORKER_TO_ORDER:
      const { worker } = action;
      return { ...state, worker };
    default:
      return state;
  }
};
