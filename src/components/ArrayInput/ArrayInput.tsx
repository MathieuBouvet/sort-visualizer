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
    <div className="array-item item-input-wrapper">
      <input className="item-input" type="text" placeholder="nombre" size={1} />
    </div>
  </div>
);

export default ArrayInput;
