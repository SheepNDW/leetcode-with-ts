/*
  反過來思考從界外走到目標點需要的 path 數：

  maxMove = 1:
    X X
  X 2 2 X
  X 2 2 X
    X X
  
  maxMove = 2:
  最多走兩步 可以從 #r #b 走到左上的點，然後加上原本從相鄰的界外走進來：1 + 1 + 2(#r) + 2(#b) = 6
    X  X
  X 6 #r X
  X #b - X
    X  X
*/
function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  const MOD = 1e9 + 7;
  let dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  for (let k = 0; k < maxMove; k++) {
    const temp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        const top = row - 1 < 0 ? 1 : dp[row - 1][col];
        const down = row + 1 >= m ? 1 : dp[row + 1][col];
        const left = col - 1 < 0 ? 1 : dp[row][col - 1];
        const right = col + 1 >= n ? 1 : dp[row][col + 1];

        temp[row][col] = (top + down + left + right) % MOD;
      }
    }
    dp = temp;
  }

  return dp[startRow][startColumn];
}

// recursive + memo
function findPaths0(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  const MOD = 1e9 + 7;
  const memo: Record<string, number> = {};

  function dfs(row: number, col: number, remainMoves: number) {
    if (row < 0 || row === m || col < 0 || col === n) return 1;
    if (remainMoves === 0) return 0;

    const key = `${row}-${col}-${remainMoves}`;
    if (memo[key] !== undefined) return memo[key];

    const top = dfs(row - 1, col, remainMoves - 1);
    const down = dfs(row + 1, col, remainMoves - 1);
    const left = dfs(row, col - 1, remainMoves - 1);
    const right = dfs(row, col + 1, remainMoves - 1);

    memo[key] = (top + down + left + right) % MOD;
    return memo[key];
  }

  return dfs(startRow, startColumn, maxMove);
}

export { findPaths };
