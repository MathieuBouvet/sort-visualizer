import mergeSortGenerator from "./mergeSortGenerator";

test("merge sort generator", () => {
  const testSort = mergeSortGenerator([42, 12, 13, -5, 56, 102, 8]);
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: {
      subArray: [42, 12, 13, -5, 56, 102, 8],
    },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [42, 12, 13, -5] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [42, 12] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [42] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [12] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [12, 42] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [13, -5] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [13] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [-5] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [-5, 13] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [-5, 12, 13, 42] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [56, 102, 8] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [56, 102] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [56] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [102] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [56, 102] },
  });
  expect(testSort.next().value).toEqual({
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: [8] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [8, 56, 102] },
  });
  expect(testSort.next().value).toEqual({
    type: "MERGE_ARRAY",
    payload: { merged: [-5, 8, 12, 13, 42, 56, 102] },
  });
});
