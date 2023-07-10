import { describe, expect, it } from 'vitest';
import { minDepth } from '.';
import { Tree } from '../../utils/tree';

describe('minDepth', () => {
  it('returns 2 for tree [3,9,20,null,null,15,7]', () => {
    const tree = new Tree().build([3, 9, 20, null, null, 15, 7]);

    const depth = minDepth(tree.root);

    expect(depth).toBe(2);
  });

  it('returns 5 for tree [2,null,3,null,4,null,5,null,6]', () => {
    const tree = new Tree().build([2, null, 3, null, 4, null, 5, null, 6]);

    const depth = minDepth(tree.root);

    expect(depth).toBe(5);
  });
});
