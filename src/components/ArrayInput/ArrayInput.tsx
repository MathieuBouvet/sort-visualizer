import React from "react";
import "./ArrayInput.css";

type ArrayInputProps<T> = {
  displayArray: T[];
  insert: () => void;
};

const ArrayInput = <T,>({ displayArray }: ArrayInputProps<T>) => (
  <div className="ArrayInput">
    {displayArray.map((item, index) => (
      <div key={index} className="array-item">
        {item}
      </div>
    ))}
  </div>
);

export default ArrayInput;
