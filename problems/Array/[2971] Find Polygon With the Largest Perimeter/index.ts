function largestPerimeter0(nums: number[]): number {
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

// ==== alternatives ====
function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let prevSum = 0;
  let ans = -1;

  for (const num of nums) {
    if (prevSum > num) {
      ans = prevSum + num;
    }
    prevSum += num;
  }

  return ans;
}

export { largestPerimeter };
