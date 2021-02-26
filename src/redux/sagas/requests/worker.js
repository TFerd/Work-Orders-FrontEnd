import axios from "axios";

export function requestGetWorker(workerId) {
  console.log("hitting user api");
  return axios.request({
    method: "get",
    url: "https://api.hatchways.io/assessment/workers/" + workerId
  });
}
