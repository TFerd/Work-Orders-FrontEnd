//Exporting because these are used by the watcher sagas
export const GET_WORKORDER = "GET_WORKORDER";
const SET_WORKORDER = "SET_WORKORDER";

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

//States in this duck and their initial values
const initialState = {
  workOrder: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKORDER:
      const { workOrder } = action;
      return { ...state, workOrder };
    default:
      return state;
  }
};
