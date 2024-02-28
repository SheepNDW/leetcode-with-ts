import { TreeNode } from '../../utils/tree';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const dfs = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }
    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
  };

  return dfs(p, q);
}

export { isSameTree };
