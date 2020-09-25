import { MergeSortAction } from "./useMergeSortState";

function merge(
  array: number[],
  start: number,
  middle: number,
  end: number
): void {
  const left = array.slice(start, middle);
  const right = array.slice(middle, end);
  let [i, j, a] = [0, 0, start];
  while (i < left.length || j < right.length) {
    let next;
    if (j >= right.length || left[i] <= right[j]) {
      next = left[i];
      i++;
    } else {
      next = right[j];
      j++;
    }
    array[a] = next;
    a++;
  }
}

function* mergeSortRecursive(
  array: number[],
  start: number,
  end: number
): Generator<MergeSortAction> {
  yield {
    type: "CALL_ON_SUB_ARRAY",
    payload: { subArray: array.slice(start, end) },
  };
  if (end - start > 1) {
    const middle = Math.ceil((end - start) / 2) + start;
    yield* mergeSortRecursive(array, start, middle);
    yield* mergeSortRecursive(array, middle, end);
    merge(array, start, middle, end);
    yield {
      type: "MERGE_ARRAY",
      payload: {
        merged: array.slice(start, end),
      },
    };
  }
}

function* mergeSortGenerator(
  arrayToSort: number[]
): Generator<MergeSortAction> {
  yield* mergeSortRecursive(arrayToSort, 0, arrayToSort.length);
}

export default mergeSortGenerator;
