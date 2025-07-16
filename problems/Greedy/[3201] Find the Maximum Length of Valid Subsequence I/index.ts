function maximumLength(nums: number[]): number {
  const n = nums.length;
  let res = 1;
  let oddSub = 0;
  let evenSub = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      evenSub += 1;
    } else {
      oddSub += 1;
    }
  }

  let mixSub = 1;
  let prev = nums[0];
  for (let i = 1; i < n; i++) {
    if ((nums[i] + prev) % 2 === 1) {
      mixSub += 1;
      prev = nums[i];
    }
  }

  res = Math.max(oddSub, evenSub, mixSub);

  return res;
}

export { maximumLength };
