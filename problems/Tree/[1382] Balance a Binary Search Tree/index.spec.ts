import { describe, expect, it } from 'vitest';
import { balanceBST } from '.';
import { Tree, TreeNode } from '../../utils/tree';

function isBalanced(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null): [boolean, number] => {
    if (!node) return [true, 0];

    const left = dfs(node.left);
    const right = dfs(node.right);

    const balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balance, 1 + Math.max(left[1], right[1])];
  };

  return dfs(root)[0];
}

describe.skip('balanceBST', () => {
  it('should return a balanced BST for root = [1,null,2,null,3,null,4,null,null]', () => {
    const root = new Tree().build([1, null, 2, null, 3, null, 4, null, null]).root;

    const result = balanceBST(root);

    expect(isBalanced(result)).toBe(true);
  });

  it('should return a balanced BST for root = [2,1,3]', () => {
    const root = new Tree().build([2, 1, 3]).root;

    const result = balanceBST(root);

    expect(isBalanced(result)).toBe(true);
  });
});
