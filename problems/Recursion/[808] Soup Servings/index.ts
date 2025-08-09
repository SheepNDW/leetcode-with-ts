/*
  dfs + memo
*/
function soupServings0(n: number): number {
  const memo: Record<string, number> = {};

  function dfs(a: number, b: number): number {
    if (a <= 0 && b > 0) return 1;
    if (a <= 0 && b <= 0) return 0.5;
    if (a > 0 && b <= 0) return 0;

    if (memo[`${a},${b}`] !== undefined) return memo[`${a},${b}`];

    const res =
      0.25 * (dfs(a - 100, b) + dfs(a - 75, b - 25) + dfs(a - 50, b - 50) + dfs(a - 25, b - 75));

    memo[`${a},${b}`] = res;
    return memo[`${a},${b}`];
  }

  if (n > 5000) return 1;
  return dfs(n, n);
}

/*
  optimization version
*/
function soupServings(n: number): number {
  if (n > 4800) return 1;

  const m = Math.ceil(n / 25);
  const memo = Array.from({ length: m + 1 }, () => Array(m + 1).fill(-1));

  function dfs(a: number, b: number): number {
    if (a <= 0 && b > 0) return 1;
    if (a <= 0 && b <= 0) return 0.5;
    if (a > 0 && b <= 0) return 0;

    if (memo[a][b] >= 0) return memo[a][b];

    const res = 0.25 * (dfs(a - 4, b) + dfs(a - 3, b - 1) + dfs(a - 2, b - 2) + dfs(a - 1, b - 3));

    memo[a][b] = res;
    return res;
  }

  return dfs(m, m);
}

export { soupServings };
