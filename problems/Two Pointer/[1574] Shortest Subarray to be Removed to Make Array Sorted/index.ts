/*
  [X X X][X X X X][X X X]
   0   i           j  n-1

  1. [0:i] increase
  2. [j:n-1] increase
  3. arr[i] <= arr[j]
*/
function findLengthOfShortestSubarray(arr: number[]): number {
  const n = arr.length;
  let res = n - 1;

  let j = n - 1;
  while (j > 0 && arr[j] >= arr[j - 1]) {
    j--;
  }

  res = Math.min(res, j);

  for (let i = 0; i < j; i++) {
    if (i > 0 && arr[i] < arr[i - 1]) break;

    while (j < n && arr[j] < arr[i]) {
      j++;
    }
    res = Math.min(res, j - i - 1);
  }

  return res;
}

export { findLengthOfShortestSubarray };
