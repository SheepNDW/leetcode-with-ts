function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(n).fill(0);

  let left = 0;
  let right = n - 1;
  let maxIdx = n - 1;

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare >= rightSquare) {
      ans[maxIdx] = leftSquare;
      left++;
    } else {
      ans[maxIdx] = rightSquare;
      right--;
    }

    maxIdx--;
  }

  return ans;
}

export { sortedSquares };
