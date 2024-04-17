import { TreeNode } from '../../utils/tree';

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth === 1) return new TreeNode(val, root);

  const dfs = (node: TreeNode | null, curDepth: number) => {
    if (!node) return;
    if (curDepth === depth - 1) {
      node.left = new TreeNode(val, node.left);
      node.right = new TreeNode(val, null, node.right);
      return;
    }
    dfs(node.left, curDepth + 1);
    dfs(node.right, curDepth + 1);
  };

  dfs(root, 1);
  return root;
}

export { addOneRow };
