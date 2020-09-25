import { useReducer } from "react";

export type MergeSortState = {
  numberList: number[];
  editingIndex: number;
};

export const mergeSortInitialState: MergeSortState = {
  numberList: [],
  editingIndex: -1,
};

type InsertValue = {
  type: "INSERT_VALUE";
  payload: {
    value: number;
  };
};

export type MergeSortAction = InsertValue;

export function mergeSortReducer(
  state: MergeSortState,
  action: MergeSortAction
): MergeSortState {
  switch (action.type) {
    case "INSERT_VALUE": {
      return {
        ...state,
        numberList: [...state.numberList, action.payload.value],
      };
    }
    default: {
      return state;
    }
  }
}

function useMergeSortState() {
  return useReducer(mergeSortReducer, mergeSortInitialState);
}

export default useMergeSortState;
