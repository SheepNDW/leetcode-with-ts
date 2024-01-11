import { describe, expect, it } from 'vitest';
import { amountOfTime } from '.';
import { Tree } from '../../utils/tree';

describe.skip('amountOfTime', () => {
  it('should return 4 for the tree [1,5,3,null,4,10,6,9,2] with start = 3', () => {
    const root = new Tree().build([1, 5, 3, null, 4, 10, 6, 9, 2]).root;
    const start = 3;

    const result = amountOfTime(root, start);

    expect(result).toBe(4);
  });

  it('should return 0 for the tree [1] with start = 1', () => {
    const root = new Tree().build([1]).root;
    const start = 1;

    const result = amountOfTime(root, start);

    expect(result).toBe(0);
  });
});
