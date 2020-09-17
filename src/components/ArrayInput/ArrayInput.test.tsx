import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ArrayInput from "./ArrayInput";

test("render the given list", () => {
  const { getAllByText } = render(
    <ArrayInput currentList={[42, 21, 56, -45]} onInsert={() => {}} />
  );
  expect(getAllByText(/(42)|(21)|(56)|(-45)/i).length).toBe(4);
});

test("updating the item value ", () => {
  const { getByRole, getByDisplayValue } = render(
    <ArrayInput currentList={[]} onInsert={() => null} />
  );
  const itemInput = getByRole("textbox");
  fireEvent.change(itemInput, { target: { value: "42" } });
  expect(getByDisplayValue("42")).toBeInTheDocument();
});
