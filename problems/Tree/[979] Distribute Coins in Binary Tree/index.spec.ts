import { describe, expect, it } from 'vitest';
import { Tree } from '../../utils/tree';
import { distributeCoins } from '.';

describe.skip('distributeCoins', () => {
  it('should return 2 for tree [3,0,0]', () => {
    const tree = new Tree().build([3, 0, 0]);
    const result = distributeCoins(tree.root);
    expect(result).toBe(2);
  });

  it('should return 3 for tree [0,3,0]', () => {
    const tree = new Tree().build([0, 3, 0]);
    const result = distributeCoins(tree.root);
    expect(result).toBe(3);
  });

  it('should return 2 for tree [1,0,2]', () => {
    const tree = new Tree().build([1, 0, 2]);
    const result = distributeCoins(tree.root);
    expect(result).toBe(2);
  });

  it('should return 4 for tree [1,0,0,null,3]', () => {
    const tree = new Tree().build([1, 0, 0, null, 3]);
    const result = distributeCoins(tree.root);
    expect(result).toBe(4);
  });
});
