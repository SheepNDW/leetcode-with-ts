import { TreeNode } from '../../utils/tree';

function sumNumbers0(root: TreeNode | null): number {
  if (!root) return 0;

  let sum = 0;
  const dfs = (node: TreeNode, curPath: number) => {
    curPath = curPath * 10 + node.val;

    if (!node.left && !node.right) {
      sum += curPath;
    }
    if (node.left) {
      dfs(node.left, curPath);
    }
    if (node.right) {
      dfs(node.right, curPath);
    }
  };

  dfs(root, 0);
  return sum;
}

/*
  use string
*/
function sumNumbers(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, total = ''): number => {
    if (!node) return 0;
    total += node.val;

    if (!node.left && !node.right) {
      return Number(total);
    }

    return dfs(node.left, total) + dfs(node.right, total);
  };

  return dfs(root);
}

export { sumNumbers };
