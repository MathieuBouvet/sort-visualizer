import mergeSortGenerator from "./mergeSortGenerator";

test("merge sort generator", () => {
  const testSort = mergeSortGenerator([42, 12, 13, -5, 56, 102, 8]);
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: {
      subArray: [42, 12, 13, -5, 56, 102, 8],
      path: [],
    },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [42, 12, 13, -5], path: ["L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [42, 12], path: ["L", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [42], path: ["L", "L", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [12], path: ["L", "L", "R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [12, 42], path: ["L", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [13, -5], path: ["L", "R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [13], path: ["L", "R", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [-5], path: ["L", "R", "R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [-5, 13], path: ["L", "R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [-5, 12, 13, 42], path: ["L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [56, 102, 8], path: ["R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [56, 102], path: ["R", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [56], path: ["R", "L", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [102], path: ["R", "L", "R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [56, 102], path: ["R", "L"] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [8], path: ["R", "R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [8, 56, 102], path: ["R"] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [-5, 8, 12, 13, 42, 56, 102], path: [] },
  });
});
