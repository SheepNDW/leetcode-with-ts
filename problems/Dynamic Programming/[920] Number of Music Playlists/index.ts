function numMusicPlaylists(n: number, goal: number, k: number): number {
  const mod = 1e9 + 7;
  const dp: number[][] = Array.from({ length: goal + 1 }, () => Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= n; j++) {
      const playNewSong = (dp[i - 1][j - 1] * (n - j + 1)) % mod;
      const replaySong = (dp[i - 1][j] * Math.max(j - k, 0)) % mod;

      dp[i][j] = (playNewSong + replaySong) % mod;
    }
  }

  return dp[goal][n];
}

/**
 * 思路：dynamic programming
 *
 * DP table：`dp[i][j]`
 * - `i`：表示播放列表的長度
 * - `j`：表示播放列表中不同歌曲的數量
 * 我們的目標是 `dp[goal][n]`，代表播放列表的長度為 `goal`，且播放列表中不同歌曲的數量為 `n`
 *
 * 為了產生 DP table 我們需要定義初始條件：
 * - `dp[0][0] = 1`：當播放列表的長度為 0，且播放列表中不同歌曲的數量為 0，只有一種可能，就是播放列表為空。
 * - 所有 i < j 的 `dp[i][j]` 都為 0，因為播放列表的長度不可能小於播放列表中不同歌曲的數量。
 *
 * 1. 新增一首還未播放的歌曲：
 *    - 當我們在播放清單中添加一首還未播放過的歌，播放清單的長度增加 1（從 i-1 到 i），唯一的歌曲數量也增加 1（從 j-1 到 j）。
 *    - 此時，我們還可以選擇的新歌數量是 `n - j + 1` (n - (j - 1))。
 *    - 因此，透過新增一首歌，可以新增的播放清單數量是 `dp[i−1][j−1]⋅(n−j+1)`。
 * 2. 重新播放一首舊的歌曲：
 *    - 當我們重新播放一首舊歌，播放清單的長度增加 1（從 i-1 到 i），但唯一的歌曲數量保持不變（還是 j）。
 *    - 我們有 `j` 首可以重新播放的歌，因為不能在 `k` 首歌之前重新播放同一首歌，所以此時，我們可以選擇的舊歌數量是 `j - k`。
 *    - 因此，透過重新播放一首舊歌，可以新增的播放清單數量是 `dp[i−1][j]⋅(j−k)`。
 *
 * 情境：`n = 3, goal = 3, k = 1`：
 *   我們有三首歌：A, B, C，需要建立一個長度為 3 的播放清單，且同一首歌之間至少要間隔 1 首歌
 *    當 `i = 1, j = 1`（我們要選擇播放列表的第一首歌，且想要放入一首新歌）：
 *      - 我們還沒有選任何歌，所以 `n - j + 1 = 3`，我們有三首歌可以選擇：A, B, C
 *
 *    當 `i = 2, j = 2`（我們要選擇播放列表的第二首歌，且已有兩首不同的歌在播放列表中）：
 *      - 假設我們之前選擇了 A，現在我們可以選擇 B 或 C，所以 `n - j + 1 = 3 - 2 + 1 = 2`
 *
 *    當 `i = 3, j = 3`（我們要選擇播放列表的第三首歌，且已有三首不同的歌在播放列表中）：
 *      - 假設我們之前選擇了 A, B，現在我們只能選擇 C，所以 `n - j + 1 = 3 - 3 + 1 = 1`
 */

export { numMusicPlaylists };
