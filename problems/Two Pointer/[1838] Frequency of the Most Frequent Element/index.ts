// sliding window
function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let result = 1;
  let count = 0;
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    // 新的減前一個 然後要同時將 (i - j) 個都加上需要補齊的操作數
    count += (i - j) * (nums[i] - nums[i - 1]);

    while (count > k) {
      count -= nums[i] - nums[j];
      j++;
    }

    result = Math.max(result, i - j + 1);
  }

  return result;
}

// sliding window 2
function maxFrequency1(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let result = 1;
  let left = 0;
  let currSum = 0;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    // 累加後去跟總面積相減得到的值就是操作數
    while (nums[right] * (right - left + 1) - currSum > k) {
      currSum -= nums[left];
      left++;
    }

    result = Math.max(right - left + 1, result);
  }

  return result;
}

export { maxFrequency };
