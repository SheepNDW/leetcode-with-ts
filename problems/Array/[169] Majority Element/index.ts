function majorityElement(nums: number[]): number {
  let ans = nums[0];
  let times = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== ans) {
      times--;
      if (times === 0) {
        ans = nums[i];
        times = 1;
      }
    } else {
      times++;
    }
  }

  return ans;
}

export { majorityElement };
