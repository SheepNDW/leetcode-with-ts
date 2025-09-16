import { describe, expect, it } from 'vitest';
import { lowestCommonAncestor } from '.';
import { Tree, TreeNode } from '../../utils/tree';

function findNode(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;

  const left = findNode(root.left, val);
  if (left) return left;

  return findNode(root.right, val);
}

describe('lowestCommonAncestor bst', () => {
  it('example 1', () => {
    const root = new Tree().build([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]).root;
    const p = findNode(root, 2);
    const q = findNode(root, 8);

    const result = lowestCommonAncestor(root, p, q);

    expect(result?.val).toBe(6);
  });

  it('example 2', () => {
    const root = new Tree().build([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]).root;
    const p = findNode(root, 2);
    const q = findNode(root, 4);

    const result = lowestCommonAncestor(root, p, q);

    expect(result?.val).toBe(2);
  });

  it('example 3', () => {
    const root = new Tree().build([2, 1]).root;
    const p = findNode(root, 2);
    const q = findNode(root, 1);

    const result = lowestCommonAncestor(root, p, q);

    expect(result?.val).toBe(2);
  });
});
