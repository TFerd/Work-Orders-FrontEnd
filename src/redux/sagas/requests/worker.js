import axios from "axios";

export function requestGetWorker(workerId) {
  return axios.request({
    method: "get",
    url: "https://api.hatchways.io/assessment/workers/" + workerId
  });
}
