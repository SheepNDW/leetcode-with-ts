function maxWidthRamp(nums: number[]): number {
  const n = nums.length;
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    if (!stack.length || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
    }
  }

  let maxWidth = 0;

  for (let j = n - 1; j >= 0; j--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[j]) {
      maxWidth = Math.max(maxWidth, j - stack.pop()!);
    }
  }

  return maxWidth;
}

export { maxWidthRamp };
