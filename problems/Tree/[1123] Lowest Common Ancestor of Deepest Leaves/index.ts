import { TreeNode } from '../../utils/tree';

/*
  check if a node whose subtree contains all deepest leaves
*/
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  // 題目說所有 node.val 都是 unique
  // 所以簡單用一個 map 記錄節點的深度 (val -> depth)
  const map = new Map<number, number>();
  let maxDepth = 0;
  let deepCount = 0;

  dfs(root, 1);

  for (const depth of map.values()) {
    if (depth === maxDepth) {
      deepCount++;
    }
  }

  let res: TreeNode | null = null;
  dfs2(root);
  return res;

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) return;
    map.set(node.val, depth);
    maxDepth = Math.max(maxDepth, depth);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  function dfs2(node: TreeNode | null): number {
    if (!node) return 0;

    const self = map.get(node.val) !== maxDepth ? 0 : 1;
    const left = dfs2(node.left);
    const right = dfs2(node.right);

    if (self + left + right === deepCount && res === null) {
      res = node;
    }

    return self + left + right;
  }
}

export { lcaDeepestLeaves };
