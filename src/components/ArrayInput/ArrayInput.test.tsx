import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ArrayInput from "./ArrayInput";

test("render the given list", () => {
  const { getAllByText } = render(
    <ArrayInput currentList={[42, 21, 56, -45]} />
  );
  expect(getAllByText(/(42)|(21)|(56)|(-45)/i).length).toBe(4);
});

test("updating the item value ", () => {
  const { getByRole, getByDisplayValue } = render(
    <ArrayInput currentList={[]} />
  );
  const itemInput = getByRole("textbox");
  fireEvent.change(itemInput, { target: { value: "42" } });
  expect(getByDisplayValue("42")).toBeInTheDocument();
});

test("edit mode", () => {
  const testEditHandler = jest.fn();
  const { getByDisplayValue } = render(
    <ArrayInput
      editingIndex={1}
      currentList={[42, 21, 13]}
      onEdit={testEditHandler}
    />
  );
  const testInput = getByDisplayValue("21");
  expect(testInput).toBeInTheDocument();
  fireEvent.change(testInput, { target: { value: "105" } });
  expect(testEditHandler).toHaveBeenCalledWith("105");
});

test("edit mode activation", () => {
  const testOnEditStartHandler = jest.fn();
  const { getByRole } = render(
    <ArrayInput
      currentList={[42, 21, 13]}
      onEditStart={testOnEditStartHandler}
    />
  );
  getByRole("button", { name: "21" }).click();
  expect(testOnEditStartHandler).toHaveBeenCalledWith(1);
});

test("edit mode stop", () => {
  const testEditEndHandler = jest.fn();
  const { getByDisplayValue } = render(
    <ArrayInput
      currentList={[42, 21, 13]}
      editingIndex={1}
      onEditEnd={testEditEndHandler}
    />
  );
  const testInput = getByDisplayValue("21");
  fireEvent.blur(testInput);
  expect(testEditEndHandler).toHaveBeenCalledTimes(1);

  fireEvent.keyDown(testInput, { key: "Enter" });
  expect(testEditEndHandler).toHaveBeenCalledTimes(2);
});
