import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("Button renders text", () => {
  const { getByRole } = render(<Button>coucou</Button>);
  expect(getByRole("button", { name: "coucou" })).toBeInTheDocument();
});

test("Button calls its click callback", () => {
  const testClickHander = jest.fn();
  const { getByRole } = render(
    <Button onClick={testClickHander}>Test Button</Button>
  );
  getByRole("button", { name: /Test Button/i }).click();
  expect(testClickHander).toHaveBeenCalledTimes(1);
});
