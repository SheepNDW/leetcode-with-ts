// Brute Force
// function maxProfit(prices: number[]): number {
//   let maxProfit: number = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > maxProfit) {
//         maxProfit = prices[j] - prices[i];
//       }
//     }
//   }

//   return maxProfit;
// }

export function maxProfit(prices: number[]): number {
  let max: number = 0;
  let minStart: number = prices[0];
  for (const price of prices) {
    minStart = Math.min(minStart, price);
    max = Math.max(max, price - minStart);
  }

  return max;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // expect: 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // expect: 0
