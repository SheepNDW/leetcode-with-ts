import type { TreeNode } from '../../utils/tree';

function amountOfTime0(root: TreeNode | null, start: number): number {
  if (!root) return 0;

  const graph = new Map<TreeNode, TreeNode[]>();
  const visited = new Set<TreeNode>();
  let startNode: TreeNode | null = null;

  // 建圖
  function buildGraph(node: TreeNode | null, parent: TreeNode | null) {
    if (!node) return;
    if (node.val === start) startNode = node;

    if (!graph.has(node)) graph.set(node, []);
    if (parent) {
      graph.get(node)?.push(parent);
      graph.get(parent)?.push(node);
    }

    buildGraph(node.left, node);
    buildGraph(node.right, node);
  }

  buildGraph(root, null);

  // BFS
  const LEVEL_FLAG = 0;
  let minutes = -1;
  const queue: (TreeNode | number)[] = [startNode!, LEVEL_FLAG];
  visited.add(startNode!);

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr === LEVEL_FLAG) {
      minutes++;
      if (queue.length > 0) queue.push(LEVEL_FLAG);
    } else {
      const neighbors = graph.get(curr as TreeNode);
      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return minutes;
}

// one pass DFS
function amountOfTime(root: TreeNode | null, start: number): number {
  let maxDistance = 0;

  const traverse = (root: TreeNode | null, start: number) => {
    let depth = 0;
    if (root === null) return depth;

    const leftDepth = traverse(root.left, start);
    const rightDepth = traverse(root.right, start);

    if (root.val === start) {
      maxDistance = Math.max(leftDepth, rightDepth);
      depth = -1;
    } else if (leftDepth >= 0 && rightDepth >= 0) {
      depth = Math.max(leftDepth, rightDepth) + 1;
    } else {
      const distance = Math.abs(leftDepth) + Math.abs(rightDepth);
      maxDistance = Math.max(maxDistance, distance);
      depth = Math.min(leftDepth, rightDepth) - 1;
    }

    return depth;
  };

  traverse(root, start);
  return maxDistance;
}

export { amountOfTime };
