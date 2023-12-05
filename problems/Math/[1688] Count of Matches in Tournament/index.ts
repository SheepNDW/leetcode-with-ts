// simulate
function numberOfMatches0(n: number): number {
  let matches = 0;

  while (n > 1) {
    if (n & 1) {
      matches += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    } else {
      matches += n / 2;
      n /= 2;
    }
  }

  return matches;
}

/**
 * logic
 * 在每場比賽中，無論隊伍數量是奇數還是偶數，都會淘汰一隊。因此，最終只剩下一隊隊伍時，會有 n - 1 支隊伍被淘汰
 * 每淘汰一支隊伍意味著進行了一場比賽。所以總共會進行 n - 1 場比賽
 */
function numberOfMatches(n: number): number {
  return n - 1;
}

export { numberOfMatches };
