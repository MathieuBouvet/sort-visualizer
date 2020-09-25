import { useReducer } from "react";
import validateListItem from "../../utils/validateListItem";

type ArrayInputState = {
  inputValue: number | "" | "-";
  hasError: boolean;
};

type EditAction = {
  type: "EDIT";
  value: string;
};

type ArrayInputAction = EditAction;

function arrayInputReducer(
  state: ArrayInputState,
  action: ArrayInputAction
): ArrayInputState {
  switch (action.type) {
    case "EDIT": {
      const { isValid, value } = validateListItem(action.value);
      if (!isValid) {
        return state;
      }
      return { ...state, inputValue: value };
    }
    default: {
      return state;
    }
  }
}

export default function useArrayInputState() {
  return useReducer<typeof arrayInputReducer>(arrayInputReducer, {
    hasError: false,
    inputValue: "",
  });
}
