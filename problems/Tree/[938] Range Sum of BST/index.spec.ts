import { describe, expect, it } from 'vitest';
import { rangeSumBST } from '.';
import { Tree } from '../../utils/tree';

describe.skip('rangeSumBST', () => {
  it('should return 32 when root = [10,5,15,3,7,null,18], low = 7, high = 15', () => {
    const root = new Tree().build([10, 5, 15, 3, 7, null, 18]).root;
    const low = 7;
    const high = 15;

    const result = rangeSumBST(root, low, high);

    expect(result).toEqual(32);
  });

  it('should return 23 when root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10', () => {
    const root = new Tree().build([10, 5, 15, 3, 7, 13, 18, 1, null, 6]).root;
    const low = 6;
    const high = 10;

    const result = rangeSumBST(root, low, high);

    expect(result).toEqual(23);
  });
});
