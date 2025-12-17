/*
  dp[i][t][s]: 在第 i 天結束時，進行了 t 筆交易，且狀態為 s 時的最大利潤
  s = 0: 空手
  s = 1: 持有多單
  s = 2: 持有空單

  狀態轉移方程式:
  dp[i][t][0] = max(
    dp[i-1][t][0],          // 保持空倉
    dp[i-1][t][1] + prices[i], // 平多
    dp[i-1][t][2] - prices[i]  // 平空
  )
  
  針對三個狀態分別討論:

  dpFlat[t]: 截至目前進行了 t 筆交易，且空手時的最大利潤
  dpLong[t]: 截至目前進行了 t 筆交易，且手上握有多單時的最大利潤
  dpShort[t]: 截至目前進行了 t 筆交易，且手上握有空單時的最大利潤
  t 為 `0..k`
*/
function maximumProfit(prices: number[], k: number): number {
  const NEG = Number.NEGATIVE_INFINITY;

  let flat = Array.from({ length: k + 1 }, () => NEG);
  let long = Array.from({ length: k + 1 }, () => NEG);
  let short = Array.from({ length: k + 1 }, () => NEG);

  flat[0] = 0;

  for (const p of prices) {
    const newFlat = [...flat];
    const newLong = [...long];
    const newShort = [...short];

    for (let t = 0; t <= k; t++) {
      // 保持空倉 or 平倉
      newFlat[t] = Math.max(flat[t], long[t] + p, short[t] - p);

      if (t >= 1) {
        // 開多
        newLong[t] = Math.max(long[t], flat[t - 1] - p);
        // 開空
        newShort[t] = Math.max(short[t], flat[t - 1] + p);
      }
    }

    flat = newFlat;
    long = newLong;
    short = newShort;
  }

  return Math.max(...flat);
}

export { maximumProfit };
