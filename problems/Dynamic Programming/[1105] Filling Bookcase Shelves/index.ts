/*
  dp[i]: the answer to the problem for books[1:i]
*/
function minHeightShelves(books: number[][], shelfWidth: number): number {
  const n = books.length;
  books.unshift([0, 0]);
  const dp: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let maxHeight = 0;
    let totalWidth = 0;

    for (let j = i; j >= 1; j--) {
      maxHeight = Math.max(maxHeight, books[j][1]);
      totalWidth += books[j][0];
      if (totalWidth > shelfWidth) break;
      dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight);
    }
  }

  return dp[n];
}

export { minHeightShelves };
