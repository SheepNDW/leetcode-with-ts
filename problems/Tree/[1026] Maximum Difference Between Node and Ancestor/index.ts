import type { TreeNode } from '../../utils/tree';

function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0;

  let maxDiff = 0;

  const dfs = (node: TreeNode | null, maxVal: number, minVal: number) => {
    if (!node) return;

    maxDiff = Math.max(maxDiff, Math.abs(maxVal - node.val), Math.abs(minVal - node.val));

    maxVal = Math.max(maxVal, node.val);
    minVal = Math.min(minVal, node.val);

    dfs(node.left, maxVal, minVal);
    dfs(node.right, maxVal, minVal);
  };

  dfs(root, root.val, root.val);
  return maxDiff;
}

export { maxAncestorDiff };
