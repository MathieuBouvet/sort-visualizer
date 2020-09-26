import duplicateValues from "./duplicateValues";

test("values duplication", () => {
  const duplicated = duplicateValues([0, 1, 2, 3], 3);
  expect(duplicated).toEqual([0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3]);
});

test("duplicate empty arra", () => {
  const duplicated = duplicateValues([], 42);
  expect(duplicated).toEqual([]);
});

test("duplicate a negative number of times", () => {
  const duplicated = duplicateValues([42, 25, -23], -1);
  expect(duplicated).toEqual([]);
});

test("duplicate zero times", () => {
  const duplicated = duplicateValues([42, 25, -23], 0);
  expect(duplicated).toEqual([]);
});
