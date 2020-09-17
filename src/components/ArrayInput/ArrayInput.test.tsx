import React from "react";
import { render } from "@testing-library/react";
import ArrayInput from "./ArrayInput";

test("render the given list", () => {
  const { getAllByText } = render(
    <ArrayInput displayArray={[42, 21, 56, -45]} insert={() => {}} />
  );
  expect(getAllByText(/(42)|(21)|(56)|(-45)/i).length).toBe(4);
});
