/*
  dp[i][t]: the maximum weight you can gain by picking t intervals from the first i intervals
  1. if not pick the events[i]
      dp[i][t] = dp[i - 1][t]
  2. if pick the events[i]
      dp[i][t] = dp[j][t-1] + events[i][2] where j is the last event that ends before events[i][0]
*/
function maxValue(events: number[][], k: number): number {
  events.sort((a, b) => a[1] - b[1]);
  const m = events.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(k + 1).fill(0));

  events.unshift([0, 0, 0]); // Add a dummy event at index 0 for easier indexing

  for (let i = 1; i <= m; i++) {
    const j = findLastSmaller(events, i);

    for (let t = 1; t <= k; t++) {
      // compute dp[i][t]
      dp[i][t] = Math.max(dp[i - 1][t], dp[j][t - 1] + events[i][2]);
    }
  }

  return dp[m][k];
}

function findLastSmaller(intervals: number[][], i: number): number {
  let left = 0;
  let right = i;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (intervals[mid][1] < intervals[i][0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
}

export { maxValue };
