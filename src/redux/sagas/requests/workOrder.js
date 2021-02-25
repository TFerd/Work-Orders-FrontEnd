import axios from "axios";

export function requestGetWorkOrder() {
  return axios.request({
    method: "get",
    url: "https://api.hatchways.io/assessment/work_orders"
  });
}
