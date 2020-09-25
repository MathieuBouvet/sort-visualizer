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

type StartEdition = {
  type: "START_EDITION";
  payload: {
    index: number;
  };
};

export type MergeSortAction = InsertValue | StartEdition;

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
    case "START_EDITION": {
      const index = action.payload.index;
      if (index < -1 || index > state.numberList.length - 1) {
        return state;
      }
      return {
        ...state,
        editingIndex: action.payload.index,
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
