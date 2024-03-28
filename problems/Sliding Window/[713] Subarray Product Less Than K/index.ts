/*
  [X X X X] X) X X
   i        j
  X [X X X X] X) X
     i        j
*/
function numSubarrayProductLessThanK0(nums: number[], k: number): number {
  const n = nums.length;
  let count = 0;
  let product = 1;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (i > j) {
      j = i;
      product = 1;
    }
    while (j < n && product * nums[j] < k) {
      product *= nums[j];
      j++;
    }
    count += j - i;
    product /= nums[i];
  }

  return count;
}

/*
  固定右邊界
*/
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;
  const n = nums.length;

  let count = 0;
  let product = 1;
  let i = 0;

  for (let j = 0; j < n; j++) {
    product *= nums[j];

    while (product >= k && i <= j) {
      product /= nums[i];
      i++;
    }

    count += j - i + 1;
  }

  return count;
}

export { numSubarrayProductLessThanK };
