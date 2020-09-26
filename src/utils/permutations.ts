function permutations(
  possibleValues: string[]
): (size: number) => Generator<string> {
  function* permutationRecursive(
    size: number,
    current: string
  ): Generator<string> {
    if (size <= 0) {
      yield current;
    } else {
      for (let value of possibleValues) {
        yield* permutationRecursive(size - 1, current + value);
      }
    }
  }
  return function* permutationsOfSize(size: number) {
    if (possibleValues.length === 0) {
      return null;
    }
    yield* permutationRecursive(size, "");
  };
}

export default permutations;
