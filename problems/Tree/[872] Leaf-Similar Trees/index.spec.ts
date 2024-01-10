import { describe, expect, it } from 'vitest';
import { leafSimilar } from '.';
import { Tree } from '../../utils/tree';

describe.skip('leafSimilar', () => {
  it('should return true for trees with leaf value sequence [6, 7, 4, 9, 8]', () => {
    const arr1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
    const arr2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
    const root1 = new Tree().build(arr1).root;
    const root2 = new Tree().build(arr2).root;

    const result = leafSimilar(root1, root2);

    expect(result).toBe(true);
  });

  it('should return false for trees with leaf value sequences [2, 3] and [3, 2]', () => {
    const root1 = new Tree().build([1, 2, 3]).root;
    const root2 = new Tree().build([1, 3, 2]).root;

    const result = leafSimilar(root1, root2);

    expect(result).toBe(false);
  });
});
