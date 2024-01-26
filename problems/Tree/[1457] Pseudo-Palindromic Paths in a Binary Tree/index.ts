import type { TreeNode } from '../../utils/tree';
/*
  Pseudo-Palindromic: at most one number can occur odd times, rest of numbers must occur even times (0 is even)

  Solution: DFS (backtracking)
      Tips: use hash to count the frequency of each number along the current path.
*/
function pseudoPalindromicPaths0(root: TreeNode | null): number {
  const freq: number[] = new Array(10).fill(0);

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    freq[node.val]++;
    let currPath = 0;
    if (!node.left && !node.right) {
      // leaf node case
      let odds = 0;
      for (let i = 1; i <= 9; i++) {
        if (freq[i] & 1) odds++;
      }
      if (odds <= 1) currPath = 1;
    }

    const leftPath = dfs(node.left);
    const rightPath = dfs(node.right);

    // backtrack
    freq[node.val]--;
    return currPath + leftPath + rightPath;
  };

  return dfs(root);
}

// bit operations
function pseudoPalindromicPaths(root: TreeNode | null): number {
  let count = 0;

  const dfs = (node: TreeNode | null, path: number = 0) => {
    if (!node) return;

    // 翻轉相應位
    path ^= 1 << node.val;

    // 如果是葉節點，檢查路徑是否為偽回文
    if (!node.left && !node.right) {
      // 檢查是否只有一位是 1（或全是 0）
      if ((path & (path - 1)) === 0) {
        count++;
      }
    }

    dfs(node.left, path);
    dfs(node.right, path);
  };

  dfs(root);
  return count;
}

export { pseudoPalindromicPaths };
