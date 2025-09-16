import { TreeNode } from '../../utils/tree';

/*
  dfs(node): check if p is in one side of node and q is in the other side
*/
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  if (root.val < p!.val && root.val < q!.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p!.val && root.val > q!.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
}

export { lowestCommonAncestor };
