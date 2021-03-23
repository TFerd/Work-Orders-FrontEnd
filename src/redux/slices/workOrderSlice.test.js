import workOrderSlice from "./workOrderSlice";
import { getWorkOrderList } from "./workOrderSlice";

it("should return correct states", () => {
  const initialState = { workOrders: null };

  expect(workOrderSlice(undefined, {})).toEqual(initialState);
});

it("should return list of work orders", async () => {
  const result = await getWorkOrderList();
  console.log("test result", result);
});
