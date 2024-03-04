import { TreeNode } from '../../utils/tree';

// DFS 爆搜
function findBottomLeftValue0(root: TreeNode | null): number {
  let maxdepth = -1;
  let bottomLeft = 0;

  const dfs = (node: TreeNode | null, currDepth: number) => {
    if (node) {
      if (!node.left && !node.right && currDepth > maxdepth) {
        maxdepth = currDepth;
        bottomLeft = node.val;
      } else {
        dfs(node.left, currDepth + 1);
        dfs(node.right, currDepth + 1);
      }
    }
  };

  dfs(root, 0);
  return bottomLeft;
}

// BFS
function findBottomLeftValue(root: TreeNode | null): number {
  const queue: TreeNode[] = [root as TreeNode];
  let current = root as TreeNode;

  while (queue.length > 0) {
    current = queue.shift()!;
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return current.val;
}

export { findBottomLeftValue };
