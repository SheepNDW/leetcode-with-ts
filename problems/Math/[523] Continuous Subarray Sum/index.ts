/*
  sum(s[i:j]) = presum[j] - presum[i-1]
  sum(s[i:j]) % k == 0 =>  presum[j] % k == presum[i-1] % k

  [0, 1, 2, 3, ... j-2] j-1 j
*/
function checkSubarraySum0(nums: number[], k: number): boolean {
  const n = nums.length;
  const presum = [nums[0]];

  for (let i = 1; i < n; i++) {
    presum[i] = presum[i - 1] + nums[i];
  }

  const remainSet = new Set();
  remainSet.add(0);

  for (let j = 0; j < n; j++) {
    if (j >= 2) {
      remainSet.add(presum[j - 2] % k);
    }

    if (j >= 1 && remainSet.has(presum[j] % k)) {
      return true;
    }
  }

  return false;
}

function checkSubarraySum(nums: number[], k: number): boolean {
  const n = nums.length;

  let presum1 = 0;
  let presum2 = 0;
  const set = new Set<number>();
  set.add(0);

  for (let j = 0; j < n; j++) {
    presum2 += nums[j];
    if (j >= 2) {
      presum1 += nums[j - 2];
      set.add(presum1 % k);
    }

    if (j >= 1 && set.has(presum2 % k)) {
      return true;
    }
  }

  return false;
}

export { checkSubarraySum };
