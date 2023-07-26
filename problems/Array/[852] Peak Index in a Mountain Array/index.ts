function peakIndexInMountainArray(arr: number[]): number {
  const binarySearch = (arr: number[], start: number, end: number): number => {
    if (start >= end - 1) {
      return arr[start] > arr[end] ? start : end;
    }

    const mid = (end + start) >> 1;
    const midEl = arr[mid];

    if (midEl > arr[mid - 1] && midEl > arr[mid + 1]) {
      return mid;
    } else if (midEl < arr[mid - 1]) {
      return binarySearch(arr, start, mid);
    } else {
      return binarySearch(arr, mid, end);
    }
  };

  return binarySearch(arr, 0, arr.length - 1);
}

// ==== Iterative ====
function peakIndexInMountainArray2(arr: number[]): number {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = (start + end) >> 1;
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

export { peakIndexInMountainArray };
