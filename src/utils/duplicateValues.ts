function duplicateValues<T>(array: T[], times: number) {
  const duplicates = [];
  for (let value of array) {
    for (let i = 0; i < times; i++) {
      duplicates.push(value);
    }
  }
  return duplicates;
}

export default duplicateValues;
