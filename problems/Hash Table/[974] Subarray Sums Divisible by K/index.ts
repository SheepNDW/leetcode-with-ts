/*
  X X X [X X X X]
         j     i

  sum[j:i] = prefix[i] - prefix[j-1]
*/
function subarraysDivByK(nums: number[], k: number): number {
  // key: presum % k, val: the number of such prefix sum
  const map = new Map<number, number>();
  map.set(0, 1);

  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const r = ((sum % k) + k) % k;
    count += map.get(r) || 0;
    map.set(r, (map.get(r) || 0) + 1);
  }

  return count;
}

export { subarraysDivByK };
