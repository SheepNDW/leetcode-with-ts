import { TreeNode } from '../../utils/tree';

function maxProduct(root: TreeNode | null): number {
  const sumTree = (node: TreeNode | null): number => {
    if (!node) return 0;
    return node.val + sumTree(node.left) + sumTree(node.right);
  };

  const MOD = 1e9 + 7;
  const total = sumTree(root);
  let res = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    const subSum = node.val + dfs(node.left) + dfs(node.right);
    res = Math.max(res, subSum * (total - subSum));
    return subSum;
  };

  dfs(root);

  return res % MOD;
}

export { maxProduct };
