function minOperations(nums: number[]): number {
  const n = nums.length;
  let overallGCD = nums[0];

  for (let i = 1; i < n; i++) {
    overallGCD = gcd(overallGCD, nums[i]);
  }

  if (overallGCD !== 1) return -1;

  let ones = 0;
  for (const num of nums) {
    if (num === 1) ones++;
  }
  if (ones > 0) return n - ones;

  let count = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let g = nums[i];

    for (let j = i; j < n; j++) {
      g = gcd(g, nums[j]);
      if (g === 1) {
        count = Math.min(count, j - i + 1);
        break;
      }
    }
  }

  return count - 1 + n - 1;
}

function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}

export { minOperations };
