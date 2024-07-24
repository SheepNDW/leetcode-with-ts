import { describe, expect, it } from 'vitest';
import { countPairs } from '.';
import { Tree } from '../../utils/tree';

describe.skip('countPairs', () => {
  it('should return 1 for root = [1,2,3,null,4], distance = 3', () => {
    const root = new Tree().build([1, 2, 3, null, 4]).root;
    const distance = 3;

    const result = countPairs(root, distance);

    expect(result).toBe(1);
  });

  it('should return 2 for root = [1,2,3,4,5,6,7], distance = 3', () => {
    const root = new Tree().build([1, 2, 3, 4, 5, 6, 7]).root;
    const distance = 3;

    const result = countPairs(root, distance);

    expect(result).toBe(2);
  });

  it('should return 1 for root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3', () => {
    const root = new Tree().build([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]).root;
    const distance = 3;

    const result = countPairs(root, distance);

    expect(result).toBe(1);
  });
});
