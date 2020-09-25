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
    { ...initialState, editingIndex: -1, numberList: [42] },
  ],
  [
    "start list edition",
    { ...initialState, editingIndex: -1, numberList: [42, 21, 13] },
    { type: "START_EDITION", payload: { index: 0 } },
    { ...initialState, editingIndex: 0, numberList: [42, 21, 13] },
  ],
  [
    "start list edition",
    { ...initialState, editingIndex: -1, numberList: [42, 21, 13] },
    { type: "START_EDITION", payload: { index: 2 } },
    { ...initialState, editingIndex: 2, numberList: [42, 21, 13] },
  ],
  [
    "start list edition on out of bound index",
    { ...initialState, editingIndex: -1, numberList: [42, 21, 13] },
    { type: "START_EDITION", payload: { index: 3 } },
    { ...initialState, editingIndex: -1, numberList: [42, 21, 13] },
    true,
  ],
  [
    "edit list item",
    { ...initialState, editingIndex: 1, numberList: [42, 21, 13] },
    { type: "EDIT_LIST_ITEM", payload: { value: "4242" } },
    { ...initialState, editingIndex: 1, numberList: [42, 4242, 13] },
  ],
  [
    "edit list item with a non parsable value",
    { ...initialState, editingIndex: 1, numberList: [42, 21, 13] },
    { type: "EDIT_LIST_ITEM", payload: { value: "troll" } },
    { ...initialState, editingIndex: 1, numberList: [42, 21, 13] },
    true,
  ],
  [
    "edit list item with an empty string",
    { ...initialState, editingIndex: 1, numberList: [42, 21, 13] },
    { type: "EDIT_LIST_ITEM", payload: { value: "" } },
    { ...initialState, editingIndex: 1, numberList: [42, "", 13] },
  ],
  [
    "end edition",
    { ...initialState, editingIndex: 1, numberList: [42, 21, 13] },
    { type: "END_EDITION" },
    { ...initialState, editingIndex: -1, numberList: [42, 21, 13] },
  ],
  [
    "end edition with an empty value",
    { ...initialState, editingIndex: 1, numberList: [42, "", 13] },
    { type: "END_EDITION" },
    { ...initialState, editingIndex: -1, numberList: [42, 13] },
  ],
  [
    "end edition with a dash",
    { ...initialState, editingIndex: 1, numberList: [42, "-", 13] },
    { type: "END_EDITION" },
    { ...initialState, editingIndex: 1, numberList: [42, "-", 13] },
    true,
  ],
])("%s", (_, state, action, expectedState, sameRef = false) => {
  const nextState = mergeSortReducer(state, action);
  expect(nextState).toEqual(expectedState);
  expect(state === nextState).toBe(sameRef);
});
