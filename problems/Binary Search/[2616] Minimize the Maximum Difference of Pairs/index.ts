function minimizeMax(nums: number[], p: number): number {
  nums.sort((a, b) => a - b);

  // 檢查是否可以找到 p 個差異小於或等於 mid 的配對
  const isValid = (mid: number) => {
    let count = 0;
    let i = 0;
    while (i < nums.length - 1) {
      if (nums[i + 1] - nums[i] <= mid) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }
    return count >= p;
  };

  let left = 0;
  let right = nums[nums.length - 1] - nums[0];
  while (left < right) {
    const mid = (left + right) >> 1;

    // 如果有足夠的 pairs 就去找更小的臨界值
    // 反之就增加臨界值
    if (isValid(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

export { minimizeMax };
