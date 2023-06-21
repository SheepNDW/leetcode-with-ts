// Sliding Window
function getAverages(nums: number[], k: number): number[] {
  const n = nums.length;
  const result: number[] = new Array(n).fill(-1);
  let sum = 0;
  let range = 2 * k + 1;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (i >= range - 1) {
      result[i - k] = Math.floor(sum / range);
      sum -= nums[i - range + 1];
    }
  }

  return result;
}

export { getAverages };
