import validateListItem from "./validateListItem";

test.each([
  ["empty string", "", { isValid: true, value: "" }],
  ["dash character", "-", { isValid: true, value: "-" }],
  ["invalid input", "troll", { isValid: false, value: "" }],
  ["negative integer", "-42", { isValid: true, value: -42 }],
  ["positive integer", "42", { isValid: true, value: 42 }],
])("%s", (_, value, expected) => {
  expect(validateListItem(value)).toEqual(expected);
});
