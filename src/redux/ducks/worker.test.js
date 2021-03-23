import { getWorker } from "./worker";

it("should return action", () => {
  const worker = getWorker(1);
  const expectedState = { type: "GET_WORKER", payload: 1 };

  expect(worker).toEqual(expectedState);
});
