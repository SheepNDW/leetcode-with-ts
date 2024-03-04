import { describe, expect, it } from 'vitest';
import { findBottomLeftValue } from '.';
import { Tree } from '../../utils/tree';

describe.skip('findBottomLeftValue', () => {
  it('should return 1 for the tree [2,1,3]', () => {
    const tree = new Tree().build([2, 1, 3]);
    const result = findBottomLeftValue(tree.root);
    expect(result).toBe(1);
  });

  it('should return 7 for the tree [1,2,3,4,null,5,6,null,null,7]', () => {
    const tree = new Tree().build([1, 2, 3, 4, null, 5, 6, null, null, 7]);
    const result = findBottomLeftValue(tree.root);
    expect(result).toBe(7);
  });

  it('should return 4 for the tree [1,2,3,null,4]', () => {
    const tree = new Tree().build([1, 2, 3, null, 4]);
    const result = findBottomLeftValue(tree.root);
    expect(result).toBe(4);
  });

  it('should return the root value for a tree with a single node [1]', () => {
    const tree = new Tree().build([1]);
    const result = findBottomLeftValue(tree.root);
    expect(result).toBe(1);
  });
});
