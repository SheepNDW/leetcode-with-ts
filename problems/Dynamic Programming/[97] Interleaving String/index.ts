function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;

  const dp: boolean[][] = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(false));
  dp[0][0] = true;

  // s2 = ''
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  // s1 = ''
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[s1.length][s2.length];
}

/**
 * `dp[i][j]` 表示 `s1` 的前 `i` 個字元和 `s2` 的前 `j` 個字元是否可以交錯組合成 `s3` 的前 `i + j` 個字元。
 *
 * 從下面兩個方向達到目前狀態 `(i,j)`：
 *
 * 1. 從 `(i - 1, j)` 轉移：
 *   - 如果 `dp[i - 1][j] == true`，代表著 `s1` 的前 `i - 1` 個字元和 `s2` 的前 `j` 個字元可以交錯組合成 `s3` 的前 `i + j - 1` 個字元。
 *   - 然後我們只需檢查 `s1[i - 1]` 是否等於 `s3[i + j - 1]`。如果相等，則 `dp[i][j]` 也為 `true`
 * 2. 從 `i, j - 1` 轉移：
 *   - 如果 `dp[i, j - 1] == true`，代表著 `s1` 的前 `i` 個字元和 `s2` 的前 `j - 1` 個字元可以交錯組合成 `s3` 的前 `i + j - 1` 個字元。
 *   - 一樣檢查 `s2[j - 1]` 是否等於 `s3[i + j - 1]`。如果相等，則 `dp[i][j]` 也為 `true`
 */

export { isInterleave };
