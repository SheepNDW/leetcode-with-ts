import { describe, expect, it } from 'vitest';
import { lowestCommonAncestor } from '.';
import { Tree, TreeNode } from '../../utils/tree';

describe('lowestCommonAncestor', () => {
  it('example 1', () => {
    const root = new Tree().build([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).root;
    const p = findNode(root, 5);
    const q = findNode(root, 1);

    const result = lowestCommonAncestor(root, p, q);

    expect(result?.val).toBe(3);
  });

  it('example 2', () => {
    const root = new Tree().build([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).root;
    const p = findNode(root, 5);
    const q = findNode(root, 4);

    const result = lowestCommonAncestor(root, p, q);

    expect(result?.val).toBe(5);
  });

  it('example 3', () => {
    const root = new Tree().build([1, 2]).root;
    const p = findNode(root, 1);
    const q = findNode(root, 2);

    const result = lowestCommonAncestor(root, p, q);

    expect(result?.val).toBe(1);
  });
});

function findNode(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;

  const left = findNode(root.left, val);
  if (left) return left;

  return findNode(root.right, val);
}
