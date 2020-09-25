import React, { useRef, useEffect } from "react";
import "./ArrayInput.css";
import useArrayInputState from "./useArrayInputState";
import Button from "../Button";

type ArrayInputProps<T> = {
  currentList: T[];
  editingIndex?: number;
  onInsert?: (value: number) => void;
  onEditStart?: (editingIndex: number) => void;
  onEditEnd?: () => void;
  onEdit?: (newValue: string) => void;
};

const ArrayInput = <T extends { toString: () => string }>({
  currentList,
  editingIndex = -1,
  onInsert = () => null,
  onEditStart = () => null,
  onEdit = () => null,
  onEditEnd = () => null,
}: ArrayInputProps<T>) => {
  const [state, dispatch] = useArrayInputState();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.select();
  }, [editingIndex]);
  return (
    <div className="ArrayInput">
      {currentList.map((item, index) => {
        if (index === editingIndex) {
          return (
            <input
              ref={inputRef}
              key={`display-${index}`}
              className="array-item array-item-edition"
              value={item.toString()}
              onChange={(e) => onEdit(e.target.value)}
              onBlur={onEditEnd}
              onKeyDown={(e) => e.key === "Enter" && onEditEnd()}
              size={item.toString().length || 1}
            />
          );
        } else {
          return (
            <button
              key={`edit-${index}`}
              className="array-item array-item-display"
              onClick={() => onEditStart(index)}
            >
              {item}
            </button>
          );
        }
      })}
      <div className="array-item item-input-wrapper">
        <input
          className="item-input"
          type="text"
          size={state.inputValue.toString().length || 1}
          value={state.inputValue ?? ""}
          onChange={(e) => dispatch({ type: "EDIT", value: e.target.value })}
        />
      </div>
      <Button
        className="add-number-button"
        onClick={() => {
          if (typeof state.inputValue === "number") {
            onInsert(state.inputValue);
          }
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default ArrayInput;
