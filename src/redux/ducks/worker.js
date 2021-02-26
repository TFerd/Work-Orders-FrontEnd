//Exporting because these are used by the watcher sagas
export const GET_WORKER = 'GET_WORKER';
const SET_WORKER = 'SET_WORKER';

export const getWorker = (workerId) => ({
  type: GET_WORKER,
  payload: workerId
});

export const setWorker = (worker) => ({
  type: SET_WORKER,
  worker
});

//States in this duck and their initial values
const initialState = {
  worker: undefined
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKER:
      const {worker} = action;
      return {...state, worker};
    default:
      return state;
  }
}
