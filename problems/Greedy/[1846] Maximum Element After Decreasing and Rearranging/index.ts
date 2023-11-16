// sort + greedy
function maximumElementAfterDecrementingAndRearranging0(arr: number[]): number {
  arr.sort((a, b) => a - b);

  let ans = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= ans + 1) {
      ans += 1;
    }
  }

  return ans;
}

// no sort
function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  const n = arr.length;
  const counts: number[] = new Array(n + 1).fill(0);

  for (const num of arr) {
    counts[Math.min(num, n)]++;
  }

  let maxElement = 1;
  for (let num = 2; num <= n; num++) {
    maxElement = Math.min(maxElement + counts[num], num);
  }

  return maxElement;
}

export { maximumElementAfterDecrementingAndRearranging };
