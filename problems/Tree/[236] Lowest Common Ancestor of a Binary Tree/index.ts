import { TreeNode } from '../../utils/tree';

/*
  Pure Recursion no extra space
  dfs(node): how many nodes of p and q is included in the subtree of node
*/
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let res: TreeNode | null = null;

  const dfs = (node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): number => {
    if (node === null) return 0;

    const left = dfs(node.left, p, q);
    const right = dfs(node.right, p, q);
    const self = node === p || node === q ? 1 : 0;

    const count = left + right + self;
    if (count === 2 && res === null) {
      res = node;
    }
    return count;
  };

  dfs(root, p, q);
  return res;
}

/* 
  alternative solution with extra space to store the path
*/
function lowestCommonAncestor1(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const dfs = (node: TreeNode | null, target: TreeNode | null, path: TreeNode[]) => {
    if (node === null) return false;

    if (node === target || dfs(node.left, target, path) || dfs(node.right, target, path)) {
      path.push(node);
      return true;
    }

    return false;
  };

  const pPath: TreeNode[] = [];
  const qPath: TreeNode[] = [];

  dfs(root, p, pPath);
  dfs(root, q, qPath);

  let res = root;
  let i = pPath.length - 1;
  let j = qPath.length - 1;

  while (i >= 0 && j >= 0 && pPath[i] === qPath[j]) {
    res = pPath[i];
    i--;
    j--;
  }

  return res;
}

export { lowestCommonAncestor };
