// DP
function minTaps0(n: number, ranges: number[]): number {
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    const left = Math.max(0, i - ranges[i]);
    const right = Math.min(n, i + ranges[i]);

    for (let j = left; j <= right; j++) {
      dp[right] = Math.min(dp[right], dp[j] + 1);
    }
  }

  return dp[n] === Infinity ? -1 : dp[n];
}
/**
 * 初始化：
 * 1. 定義一個長度為 `n + 1` 的 `dp` 陣列，`dp[i]` 存放澆水到座標 `i` 所需要的最少水龍頭數量。
 * 2. 初始化為無限大，表示初始時假設所有位置都無法被澆到水。
 * 3. `dp[0] = 0`，起始位置不用水龍頭
 * 動態規劃：
 * 1. 從 `0` 到 `n` 遍歷每個水龍頭位置 `i`。
 * 2. 根據每個水龍頭的 `ranges[i]`，計算該水龍頭可以澆水的範圍 `[left, right]`
 *    - `left = Math.max(0, i - ranges[i]`
 *    - `right = Math.min(n, i + ranges[i])`
 * 3. 在範圍 `[left, right]` 內，找到可以用最少水龍頭數量澆到該範圍的 `dp[j]`，並更新 `dp[right]`。
 * 4. 最後，檢查 `dp[n]`。如果它仍然是 Infinity，則回傳 `-1`（表示整個花園無法全部澆水）。否則，回傳 `dp[n]`。
 */

// Greedy
function minTaps(n: number, ranges: number[]): number {
  const maxReach: number[] = new Array(n + 1).fill(0);

  for (let i = 0; i < ranges.length; i++) {
    const start = Math.max(0, i - ranges[i]);
    const end = Math.min(n, i + ranges[i]);
    maxReach[start] = Math.max(maxReach[start], end);
  }

  let taps = 0;
  let curEnd = 0;
  let nextEnd = 0;

  for (let i = 0; i <= n; i++) {
    nextEnd = Math.max(nextEnd, maxReach[i]);

    if (i === curEnd) {
      taps++;
      curEnd = nextEnd;
      if (curEnd >= n) return taps;
    }
  }

  return -1;
}

export { minTaps };
