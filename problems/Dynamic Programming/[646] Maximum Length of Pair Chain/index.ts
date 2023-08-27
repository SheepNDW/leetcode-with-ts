// Greedy
function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[1] - b[1]);

  let chainLength = 1;
  let lastRight = pairs[0][1];

  for (let i = 1; i < pairs.length; i++) {
    if (lastRight < pairs[i][0]) {
      chainLength++;
      lastRight = pairs[i][1];
    }
  }

  return chainLength;
}

// DP
function findLongestChain1(pairs: number[][]): number {
  // 根據 pairs 的第一個元素排序
  pairs.sort((a, b) => a[0] - b[0]);

  const n = pairs.length;
  // 初始化 dp 陣列
  const dp: number[] = new Array(n).fill(1);

  let maxChainLength = 1; // 用來存儲最長 chain 的長度

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxChainLength = Math.max(maxChainLength, dp[i]);
  }

  return maxChainLength;
}

export { findLongestChain };
