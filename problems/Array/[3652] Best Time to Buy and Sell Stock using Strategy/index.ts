/*
  [...,i-k+1...i,...]
  profit[0:i-k] + modify[i-k+1...i] + profit[i+1:n-1]
  
  modify[i-k+1...i] -> sum[i-k/2+1...i]
*/
function maxProfit(prices: number[], strategy: number[], k: number): number {
  const n = prices.length;
  const profit = [prices[0] * strategy[0]];
  const sum = [prices[0]];

  for (let i = 1; i < n; i++) {
    profit[i] = profit[i - 1] + prices[i] * strategy[i];
    sum[i] = sum[i - 1] + prices[i];
  }

  let res = profit[n - 1];

  for (let i = k - 1; i < n; i++) {
    const left = profit[i - k] ?? 0;
    const right = profit[n - 1] - profit[i];
    const changed = sum[i] - sum[i - k / 2];

    res = Math.max(res, left + changed + right);
  }

  return res;
}

export { maxProfit };
