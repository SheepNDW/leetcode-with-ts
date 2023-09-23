// Prefix Sum
function minOperations0(nums: number[], x: number): number {
  const n = nums.length;
  const suffix = new Map<number, number>();
  let rightSum = 0;

  suffix.set(0, n);
  for (let i = n - 1; i >= 0; i--) {
    rightSum += nums[i];
    suffix.set(rightSum, i);
  }

  let leftSum = 0;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    const sIndex = suffix.get(x - leftSum);

    if (sIndex !== undefined && i <= sIndex) {
      const totalOperations = i + (n - sIndex);
      min = Math.min(min, totalOperations);
    }

    leftSum += nums[i];
  }

  return min === Infinity ? -1 : min;
}

// Sliding Window
// 確保在 window 內的元素和等於 total - x 就可以反推外面有多少 (兩側)
function minOperations(nums: number[], x: number): number {
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b);

  if (total < x) return -1;

  let left = 0;
  let right = 0;
  let tempSum = nums[right];
  let min = Infinity;

  while (right < n) {
    if (tempSum === total - x) {
      min = Math.min(min, n - (right - left + 1));
      tempSum += nums[++right] || 0;
    } else if (tempSum < total - x) {
      tempSum += nums[++right] || 0;
    } else {
      tempSum -= nums[left++];
    }
  }

  return min === Infinity ? -1 : min;
}

export { minOperations };
