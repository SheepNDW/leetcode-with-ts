import { describe, expect, it } from 'vitest';
import { diameterOfBinaryTree } from '.';
import { Tree } from '../../utils/tree';

describe.skip('diameterOfBinaryTree', () => {
  it('should return 3 for a binary tree [1,2,3,4,5]', () => {
    const tree = new Tree().build([1, 2, 3, 4, 5]);
    const result = diameterOfBinaryTree(tree.root);
    expect(result).toBe(3);
  });

  it('should return 1 for a binary tree [1,2]', () => {
    const tree = new Tree().build([1, 2]);
    const result = diameterOfBinaryTree(tree.root);
    expect(result).toBe(1);
  });

  it('should return 0 for a binary tree with a single node [1]', () => {
    const tree = new Tree().build([1]);
    const result = diameterOfBinaryTree(tree.root);
    expect(result).toBe(0);
  });

  it('should return 2 for a binary tree [1,2,3,null,4]', () => {
    const tree = new Tree().build([1, 2, 3, null, 4]);
    const result = diameterOfBinaryTree(tree.root);
    expect(result).toBe(3);
  });

  it('should return 4 for a binary tree [1,2,3,4,5,null,null,6]', () => {
    const tree = new Tree().build([1, 2, 3, 4, 5, null, null, 6]);
    const result = diameterOfBinaryTree(tree.root);
    expect(result).toBe(4);
  });
});
