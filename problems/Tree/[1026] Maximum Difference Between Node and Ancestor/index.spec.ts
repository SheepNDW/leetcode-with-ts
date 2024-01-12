import { describe, expect, it } from 'vitest';
import { maxAncestorDiff } from '.';
import { Tree } from '../../utils/tree';

describe.skip('maxAncestorDiff', () => {
  it('should return 7 for the tree [8,3,10,1,6,null,14,null,null,4,7,13]', () => {
    const root = new Tree().build([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]).root;

    const result = maxAncestorDiff(root);

    expect(result).toBe(7);
  });

  it('should return 3 for the tree [1,null,2,null,0,3]', () => {
    const root = new Tree().build([1, null, 2, null, 0, 3]).root;

    const result = maxAncestorDiff(root);

    expect(result).toBe(3);
  });
});
