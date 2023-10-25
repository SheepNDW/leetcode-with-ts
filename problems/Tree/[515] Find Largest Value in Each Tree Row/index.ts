import { TreeNode } from '../../utils/tree';

// BFS solution
function largestValues(root: TreeNode | null): number[] {
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

export { largestValues };
