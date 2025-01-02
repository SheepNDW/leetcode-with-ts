/*
  dfs + memo 
*/
function mincostTickets0(days: number[], costs: number[]): number {
  const set = new Set(days);
  const memo = new Map<number, number>();

  function dfs(day: number): number {
    if (day > days[days.length - 1]) return 0;
    if (memo.has(day)) return memo.get(day)!;

    if (!set.has(day)) {
      memo.set(day, dfs(day + 1));
      return memo.get(day)!;
    }

    const one = dfs(day + 1) + costs[0];
    const seven = dfs(day + 7) + costs[1];
    const thirty = dfs(day + 30) + costs[2];

    memo.set(day, Math.min(one, seven, thirty));
    return memo.get(day)!;
  }

  return dfs(days[0]);
}

/*
  dp[i]: the cost for the first i days you can travel

  if (i not in days) dp[i] = dp[i-1]

  dp[i] = min(
    dp[i-1] + costs[0],
    dp[i-7] + costs[1],
    dp[i-30] + costs[2]
  )
*/
function mincostTickets(days: number[], costs: number[]): number {
  const set = new Set(days);
  const dp = Array.from({ length: days[days.length - 1] + 1 }, () => 0);

  for (let i = 1; i <= days[days.length - 1]; i++) {
    if (!set.has(i)) {
      dp[i] = dp[i - 1];
    } else {
      const one = dp[i - 1] + costs[0];
      const seven = dp[Math.max(0, i - 7)] + costs[1];
      const thirty = dp[Math.max(0, i - 30)] + costs[2];

      dp[i] = Math.min(one, seven, thirty);
    }
  }

  return dp[days[days.length - 1]];
}

export { mincostTickets };
