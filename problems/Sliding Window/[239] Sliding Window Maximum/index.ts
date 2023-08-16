function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

/**
 * 思路：
 * 1. 建立一個 deque 用來存放目前 window 範圍內的元素 index，並且 deque 中的索引值對應的元素值是降序排列。
 * 2. 開始遍歷 nums，對目前元素 nums[i] 做以下處理：
 *    - 檢查 deque 中的第一個元素是否已經超出 window 範圍，如果是的話就將其移除。
 *    - 從 deque 的尾部移除所有小於 nums[i] 的元素索引。這保證了 deque 中的索引值對應的元素值是降序排列。
 *    - 將 nums[i] 的索引值放入 deque 的尾部。
 *    - 如果 window 範圍內的元素個數已經達到 k 個，開始將 deque 中的第一個元素對應的元素值放入 result 中。
 * 3. 回傳 result。
 */

export { maxSlidingWindow };
