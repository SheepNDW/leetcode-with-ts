import { TreeNode } from '../../utils/tree';

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];
  const toDelete = new Set(to_delete);

  function dfs(node: TreeNode | null, isRoot: boolean): TreeNode | null {
    if (!node) {
      return null;
    }

    const isDeleted = toDelete.has(node.val);

    if (isRoot && !isDeleted) {
      result.push(node);
    }

    node.left = dfs(node.left, isDeleted);
    node.right = dfs(node.right, isDeleted);

    return isDeleted ? null : node;
  }

  dfs(root, true);

  return result;
}

export { delNodes };
