function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);

  let maxSideLen = nums[0];
  let otherSideSum = nums.reduce((a, c) => a + c, -nums[0]);

  for (let i = 1; i < nums.length - 2; i++) {
    if (maxSideLen >= otherSideSum) {
      maxSideLen = nums[i];
      otherSideSum -= nums[i];
    }
  }

  return maxSideLen < otherSideSum ? maxSideLen + otherSideSum : -1;
}

export { largestPerimeter };
