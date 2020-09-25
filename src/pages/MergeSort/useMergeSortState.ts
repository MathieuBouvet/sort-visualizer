import { useReducer } from "react";
import validateListItem from "../../utils/validateListItem";

export type MergeSortState = {
  numberList: (number | "" | "-")[];
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

type EditListItem = {
  type: "EDIT_LIST_ITEM";
  payload: {
    value: string;
  };
};

type EndEdition = {
  type: "END_EDITION";
};

type CallOnSubArray = {
  type: "CALL_ON_SUB_ARRAY";
  payload: {
    subArray: number[];
  };
};

type MergeArray = {
  type: "MERGE_ARRAY";
  payload: {
    merged: number[];
  };
};

export type MergeSortAction =
  | InsertValue
  | StartEdition
  | EditListItem
  | EndEdition
  | CallOnSubArray
  | MergeArray;

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
    case "EDIT_LIST_ITEM": {
      const { editingIndex, numberList } = state;
      const { isValid, value: newValue } = validateListItem(
        action.payload.value
      );
      if (!isValid) {
        return state;
      }
      return {
        ...state,
        numberList: [
          ...numberList.slice(0, editingIndex),
          newValue,
          ...numberList.slice(editingIndex + 1),
        ],
      };
    }
    case "END_EDITION": {
      const { numberList, editingIndex } = state;
      const editedValue = numberList[editingIndex];
      if (editingIndex < 0 || editedValue === "-") {
        return state;
      }
      if (editedValue === "") {
        return {
          ...state,
          editingIndex: -1,
          numberList: [
            ...numberList.slice(0, editingIndex),
            ...numberList.slice(editingIndex + 1),
          ],
        };
      }
      return {
        ...state,
        editingIndex: -1,
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
