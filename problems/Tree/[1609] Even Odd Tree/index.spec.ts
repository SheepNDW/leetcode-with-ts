import { describe, expect, it } from 'vitest';
import { isEvenOddTree } from '.';
import { Tree } from '../../utils/tree';

describe.skip('isEvenOddTree', () => {
  it('should return true for the tree [1,10,4,3,null,7,9,12,8,6,null,null,2]', () => {
    const tree = new Tree().build([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2]);
    const result = isEvenOddTree(tree.root);
    expect(result).toBe(true);
  });

  it('should return false for the tree [5,4,2,3,3,7]', () => {
    const tree = new Tree().build([5, 4, 2, 3, 3, 7]);
    const result = isEvenOddTree(tree.root);
    expect(result).toBe(false);
  });

  it('should return false for the tree [5,9,1,3,5,7]', () => {
    const tree = new Tree().build([5, 9, 1, 3, 5, 7]);
    const result = isEvenOddTree(tree.root);
    expect(result).toBe(false);
  });

  it('should return false for the tree [2,12,8,5,9,null,null,18,16]', () => {
    const tree = new Tree().build([2, 12, 8, 5, 9, null, null, 18, 16]);
    const result = isEvenOddTree(tree.root);
    expect(result).toBe(false);
  });
});
