function change(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

/**
 * 思路：DP
 * #1 建立一個 DP table, dp[i] 代表組成 i 元的組合數
 * #2 dp[0] = 1, 代表組成 0 元的組合數為 1 (都不選)
 * #3 dp[i - coin] 代表組成 i - coin 元的組合數，因為當我們在湊出 `i - coin` 的組合數基礎上，再加上 coin 就可以湊出 i 元的一種新組合
 *    以 coins = [1, 2], amount = 3 為例：
 *      dp[0] = 1  => []
 *      dp[1] = dp[1 - 1] = 1 => [1]
 *      dp[2] = dp[2 - 1] + dp[2 - 2] = 2 => [1, 1], [2]
 *      dp[3] = dp[3 - 1] + dp[3 - 2] = 3 => [1, 1, 1], [1, 2], [2, 1]
 * #5 遍歷 coins，並從 coin 開始遍歷 dp，直到 amount，然後更新 dp[i] 把每種 dp[i - coin] 的組合數加上去
 * #6 回傳 dp[amount]
 */

export { change };
