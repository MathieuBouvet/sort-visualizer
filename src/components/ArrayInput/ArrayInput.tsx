import React from "react";
import "./ArrayInput.css";

type ArrayInputProps<T> = {
  currentList: T[];
  onInsert: () => void;
};

const ArrayInput = <T,>({ currentList }: ArrayInputProps<T>) => (
  <div className="ArrayInput">
    {currentList.map((item, index) => (
      <div key={index} className="array-item">
        {item}
      </div>
    ))}
  </div>
);

export default ArrayInput;
