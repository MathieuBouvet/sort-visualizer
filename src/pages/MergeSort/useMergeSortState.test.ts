import {
  mergeSortReducer,
  MergeSortState,
  MergeSortAction,
  mergeSortInitialState as initialState,
} from "./useMergeSortState";

test.each<[string, MergeSortState, MergeSortAction, MergeSortState, boolean?]>([
  [
    "inserting a value in the number list",
    initialState,
    { type: "INSERT_VALUE", payload: { value: 42 } },
    { editingIndex: -1, numberList: [42] },
  ],
  [
    "start list edition",
    { editingIndex: -1, numberList: [42, 21, 13] },
    { type: "START_EDITION", payload: { index: 0 } },
    { editingIndex: 0, numberList: [42, 21, 13] },
  ],
  [
    "start list edition",
    { editingIndex: -1, numberList: [42, 21, 13] },
    { type: "START_EDITION", payload: { index: 2 } },
    { editingIndex: 2, numberList: [42, 21, 13] },
  ],
  [
    "start list edition on out of bound index",
    { editingIndex: -1, numberList: [42, 21, 13] },
    { type: "START_EDITION", payload: { index: 3 } },
    { editingIndex: -1, numberList: [42, 21, 13] },
    true,
  ],
  [
    "edit list item",
    { editingIndex: 1, numberList: [42, 21, 13] },
    { type: "EDIT_LIST_ITEM", payload: { value: "4242" } },
    { editingIndex: 1, numberList: [42, 4242, 13] },
  ],
  [
    "edit list item with a non parsable value",
    { editingIndex: 1, numberList: [42, 21, 13] },
    { type: "EDIT_LIST_ITEM", payload: { value: "troll" } },
    { editingIndex: 1, numberList: [42, 21, 13] },
    true,
  ],
  [
    "edit list item with an empty string",
    { editingIndex: 1, numberList: [42, 21, 13] },
    { type: "EDIT_LIST_ITEM", payload: { value: "" } },
    { editingIndex: 1, numberList: [42, 0, 13] },
  ],
])("%s", (_, state, action, expectedState, sameRef = false) => {
  const nextState = mergeSortReducer(state, action);
  expect(nextState).toEqual(expectedState);
  expect(state === nextState).toBe(sameRef);
});
