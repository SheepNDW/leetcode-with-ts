import { TreeNode } from '../../utils/tree';

function balanceBST(root: TreeNode | null): TreeNode | null {
  const nodeValues: number[] = [];

  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    dfs(node.left);
    nodeValues.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  const build = (l: number, r: number): TreeNode | null => {
    if (l > r) return null;

    const mid = (l + r) >> 1;
    const node = new TreeNode(nodeValues[mid]);

    node.left = build(l, mid - 1);
    node.right = build(mid + 1, r);

    return node;
  };

  return build(0, nodeValues.length - 1);
}

export { balanceBST };
