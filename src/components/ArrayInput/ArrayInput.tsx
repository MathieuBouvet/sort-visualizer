import React from "react";
import "./ArrayInput.css";
import useArrayInputState from "./useArrayInputState";
import Button from "../Button";

type ArrayInputProps<T> = {
  currentList: T[];
  onInsert: () => void;
};

const ArrayInput = <T,>({ currentList, onInsert }: ArrayInputProps<T>) => {
  const [state, dispatch] = useArrayInputState();
  return (
    <div className="ArrayInput">
      {currentList.map((item, index) => (
        <div key={index} className="array-item">
          {item}
        </div>
      ))}
      <div className="array-item item-input-wrapper">
        <input
          className="item-input"
          type="text"
          size={
            state.inputValue !== null ? state.inputValue.toString().length : 1
          }
          value={state.inputValue ?? ""}
          onChange={(e) => dispatch({ type: "EDIT", value: e.target.value })}
        />
      </div>
      <Button className="add-number-button" onClick={onInsert}>
        Add
      </Button>
    </div>
  );
};

export default ArrayInput;
