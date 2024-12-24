import { TreeNode } from '../../utils/tree';

function minimumOperations(root: TreeNode | null): number {
  const level: number[][] = Array.from({ length: 10 ** 5 }, () => []);
  let maxDepth = 0;
  let count = 0;
  dfs(root, 0);

  for (let t = 0; t <= maxDepth; t++) {
    const nums = level[t];
    const sorted = [...nums].sort((a, b) => a - b);
    const rank: Record<number, number> = {};

    for (let i = 0; i < sorted.length; i++) {
      rank[sorted[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
      while (rank[nums[i]] !== i) {
        const temp = nums[i];
        nums[i] = nums[rank[nums[i]]];
        nums[rank[temp]] = temp;

        count++;
      }
    }
  }

  return count;

  function dfs(node: TreeNode | null, depth: number) {
    if (node === null) return;

    maxDepth = Math.max(maxDepth, depth);
    level[depth].push(node.val);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
}

export { minimumOperations };
