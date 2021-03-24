import axios from "axios";

export function requestGetWorkOrder() {
  console.log("hitting workorder api");
  return axios.request({
    method: "get",
    url: "https://api.hatchways.io/assessment/work_orders"
  });
}
