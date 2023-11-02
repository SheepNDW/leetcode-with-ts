// Brute Force
function maxProfit0(prices: number[]): number {
  const n = prices.length;
  let maxProfit: number = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }

  return maxProfit;
}

// DP
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}

export { maxProfit };
