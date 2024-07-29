function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }
  for (const [from, to, weight] of edges) {
    dp[from][to] = weight;
    dp[to][from] = weight;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  let result = -1;
  let record = Infinity;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (dp[i][j] <= distanceThreshold) {
        count++;
      }
    }
    if (count <= record) {
      record = count;
      result = i;
    }
  }

  return result;
}

export { findTheCity };
