/*
  Floyd: N^3
*/
function minimumCost(
  source: string,
  target: string,
  original: string[],
  changed: string[],
  cost: number[],
): number {
  const getCharCode = (s: string) => s.charCodeAt(0) - 'a'.charCodeAt(0);
  const dp = Array.from({ length: 26 }, () => Array(26).fill(Infinity));

  for (let i = 0; i < 26; i++) {
    dp[i][i] = 0;
  }

  for (let i = 0; i < cost.length; i++) {
    const x = getCharCode(original[i]);
    const y = getCharCode(changed[i]);
    dp[x][y] = Math.min(dp[x][y], cost[i]);
  }

  for (let k = 0; k < 26; k++) {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  let res = 0;

  for (let i = 0; i < source.length; i++) {
    const x = getCharCode(source[i]);
    const y = getCharCode(target[i]);
    if (dp[x][y] === Infinity) return -1;
    res += dp[x][y];
  }

  return res;
}

export { minimumCost };
