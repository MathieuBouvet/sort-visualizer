import { useReducer } from "react";

type ArrayInputState = {
  inputValue: number | null;
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
      return state;
    }
    default: {
      return state;
    }
  }
}

export default function useArrayInputState() {
  return useReducer<typeof arrayInputReducer>(arrayInputReducer, {
    hasError: false,
    inputValue: null,
  });
}
