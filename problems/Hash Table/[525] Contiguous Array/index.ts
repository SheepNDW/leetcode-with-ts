/*
  subarray sum [j:i] => prefixSum[i] - prefixSum[j-1]

  X X [X X X X X]
       j       i

  map: prefix sum -> j
*/
function findMaxLength(nums: number[]): number {
  const map = new Map<number, number>(); // prefix -> j
  map.set(0, -1);

  let max = 0;
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      prefixSum += 1;
    } else {
      prefixSum -= 1;
    }
    if (map.has(prefixSum)) {
      max = Math.max(max, i - map.get(prefixSum)!);
    } else {
      map.set(prefixSum, i);
    }
  }

  return max;
}

export { findMaxLength };
