import {
  mergeSortReducer,
  MergeSortState,
  MergeSortAction,
  mergeSortInitialState as initialState,
} from "./useMergeSortState";

test.each<[string, MergeSortState, MergeSortAction, MergeSortState]>([
  [
    "inserting a value in the number list",
    initialState,
    { type: "INSERT_VALUE", payload: { value: 42 } },
    { editingIndex: -1, numberList: [42] },
  ],
])("%s", (_, state, action, expectedState) => {
  const nextState = mergeSortReducer(state, action);
  expect(nextState).toEqual(expectedState);
});
