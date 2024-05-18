import { TreeNode } from '../../utils/tree';

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
  const dfs = (node: TreeNode | null) => {
    if (!node) return null;

    node.left = dfs(node.left);
    node.right = dfs(node.right);

    if (!node.left && !node.right && node.val === target) {
      return null;
    }

    return node;
  };

  return dfs(root);
}

export { removeLeafNodes };
