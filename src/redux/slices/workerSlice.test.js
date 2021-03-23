import workerSlice from "./workerSlice";
import { getWorker } from "./workerSlice";

it("should return correct states", () => {
  const initialState = { worker: null };
  const testState = { worker: { name: "johnny", age: 1 } };

  expect(workerSlice(undefined, {})).toEqual(initialState);
  expect(workerSlice({ worker: { name: "johnny", age: 1 } }, {})).toEqual(
    testState
  );
});

it("should return worker with id 1", async () => {
  //testing here
  const result = await getWorker(1);
  expect(result.worker.companyName).toBe("Gabspot");
  expect(result.worker.id).toBe(1);
});

it("should return -1 when param not a number", async () => {
  const result = await getWorker("sdf");
  expect(result).toBe(-1);
});

it("should return -1 when param is blank", async () => {
  const result = await getWorker();
  expect(result).toBe(-1);
});
