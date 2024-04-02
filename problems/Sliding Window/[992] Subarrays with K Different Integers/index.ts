function subarraysWithKDistinct(nums: number[], k: number): number {
  const count = new Map<number, number>();
  let result = 0;
  let leftFar = 0;
  let leftNear = 0;

  for (let right = 0; right < nums.length; right++) {
    count.set(nums[right], (count.get(nums[right]) || 0) + 1);

    while (count.size > k) {
      count.set(nums[leftNear], count.get(nums[leftNear])! - 1);
      if (count.get(nums[leftNear]) === 0) {
        count.delete(nums[leftNear]);
      }
      leftNear += 1;
      leftFar = leftNear;
    }

    while (count.get(nums[leftNear])! > 1) {
      count.set(nums[leftNear], count.get(nums[leftNear])! - 1);
      leftNear += 1;
    }

    if (count.size === k) {
      result += leftNear - leftFar + 1;
    }
  }

  return result;
}

export { subarraysWithKDistinct };
