import type { TreeNode } from '../../utils/tree';

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let ans = 0;

  function dfs(node: TreeNode | null) {
    if (!node) return;

    if (node.val >= low && node.val <= high) {
      ans += node.val;
    }

    if (node.val < high) {
      dfs(node.right);
    }

    if (node.val > low) {
      dfs(node.left);
    }
  }

  dfs(root);
  return ans;
}

export { rangeSumBST };
