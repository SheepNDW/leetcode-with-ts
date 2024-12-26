import { Deque } from '@datastructures-js/deque';
import { TreeNode } from '../../utils/tree';

// BFS solution
function largestValues0(root: TreeNode | null): number[] {
  const result: number[] = [];

  // BFS
  const queue: TreeNode[] = [];
  let node = root;
  node && queue.push(node);

  while (queue.length) {
    let n = queue.length;
    let max = -Infinity;

    for (let i = 0; i < n; i++) {
      const currNode = queue[i];
      max = Math.max(max, currNode.val);

      if (currNode.left !== null) {
        queue.push(currNode.left);
      }
      if (currNode.right !== null) {
        queue.push(currNode.right);
      }
    }

    queue.splice(0, n);
    result.push(max);
  }

  return result;
}

// DFS solution
function largestValues1(root: TreeNode | null): number[] {
  const dfs = (node: TreeNode | null, depth: number) => {
    if (node === null) return;

    if (result.length === depth) {
      result.push(node.val);
    } else {
      result[depth] = Math.max(result[depth], node.val);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  const result: number[] = [];
  dfs(root, 0);
  return result;
}

// 使用 LeetCode 環境中的 Deque
function largestValues(root: TreeNode | null): number[] {
  if (!root) return [];
  const queue = new Deque([root]);
  const res: number[] = [];

  while (!queue.isEmpty()) {
    let len = queue.size();
    let max = Number.MIN_SAFE_INTEGER;

    while (len--) {
      const node = queue.popFront();
      max = Math.max(max, node.val);

      if (node.left) queue.pushBack(node.left);
      if (node.right) queue.pushBack(node.right);
    }

    res.push(max);
  }

  return res;
}

export { largestValues };
