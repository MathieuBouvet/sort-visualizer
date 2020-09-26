import permutations from "./permutations";

const unaryPermutations = permutations(["0"]);
const binaryPermutations = permutations(["0", "1"]);
const ternaryPermutations = permutations(["L", "R", "M"]);

test.each([
  [0, [""]],
  [1, ["0"]],
  [2, ["00"]],
])("unary permutations of size %i", (size, expected) => {
  const nSizePermutation = unaryPermutations(size);
  expect([...nSizePermutation]).toEqual(expected);
});

test.each([
  [0, [""]],
  [1, ["0", "1"]],
  [2, ["00", "01", "10", "11"]],
  [3, ["000", "001", "010", "011", "100", "101", "110", "111"]],
])("binary permutations of size %i", (size, expected) => {
  const nSizePermutation = binaryPermutations(size);
  expect([...nSizePermutation]).toEqual(expected);
});

test.each([
  [0, [""]],
  [1, ["L", "R", "M"]],
  [2, ["LL", "LR", "LM", "RL", "RR", "RM", "ML", "MR", "MM"]],
  [
    3,
    [
      "LLL",
      "LLR",
      "LLM",
      "LRL",
      "LRR",
      "LRM",
      "LML",
      "LMR",
      "LMM",
      "RLL",
      "RLR",
      "RLM",
      "RRL",
      "RRR",
      "RRM",
      "RML",
      "RMR",
      "RMM",
      "MLL",
      "MLR",
      "MLM",
      "MRL",
      "MRR",
      "MRM",
      "MML",
      "MMR",
      "MMM",
    ],
  ],
])("binary permutations of size %i", (size, expected) => {
  const nSizePermutation = ternaryPermutations(size);
  expect([...nSizePermutation]).toEqual(expected);
});

test("permutations of empty array", () => {
  const emptyArrayPermutations = permutations([]);
  expect([...emptyArrayPermutations(0)]).toEqual([]);
  expect([...emptyArrayPermutations(1)]).toEqual([]);
  expect([...emptyArrayPermutations(2)]).toEqual([]);
  expect([...emptyArrayPermutations(42)]).toEqual([]);
});

test("less than zero size permutations", () => {
  const zeroSizePermutations = binaryPermutations(-10);
  expect([...zeroSizePermutations]).toEqual([""]);
});
