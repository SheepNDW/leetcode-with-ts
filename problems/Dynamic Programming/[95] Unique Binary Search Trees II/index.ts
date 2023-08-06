import { TreeNode } from '../../utils/tree';

// Recursive solution
function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [null];

  const generate = (start: number, end: number): Array<TreeNode | null> => {
    if (start > end) return [null];

    const trees: Array<TreeNode | null> = [];
    for (let i = start; i <= end; i++) {
      const leftTrees = generate(start, i - 1);
      const rightTrees = generate(i + 1, end);

      for (const left of leftTrees) {
        for (const right of rightTrees) {
          const currentTree = new TreeNode(i, left, right);
          trees.push(currentTree);
        }
      }
    }

    return trees;
  };

  return generate(1, n);
}

export { generateTrees };
