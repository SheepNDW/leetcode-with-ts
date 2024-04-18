import { TreeNode } from '../../utils/tree';

function smallestFromLeaf(root: TreeNode | null): string {
  const ACSII_A = 97;

  const dfs = (node: TreeNode | null, curStr: string): string => {
    if (!node) return curStr;

    curStr = String.fromCharCode(ACSII_A + node.val) + curStr;

    if (node.left && node.right) {
      const left = dfs(node.left, curStr);
      const right = dfs(node.right, curStr);
      return left < right ? left : right;
    }

    if (node.left) {
      return dfs(node.left, curStr);
    }

    if (node.right) {
      return dfs(node.right, curStr);
    }

    return curStr;
  };

  return dfs(root, '');
}

export { smallestFromLeaf };
