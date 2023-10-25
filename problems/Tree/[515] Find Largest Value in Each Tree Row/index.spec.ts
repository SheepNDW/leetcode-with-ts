import { describe, expect, it } from 'vitest';
import { largestValues } from '.';
import { Tree } from '../../utils/tree';

describe('largestValues', () => {
  it('should return the largest value in each row of the tree', () => {
    const tree = new Tree();
    tree.build([1, 3, 2, 5, 3, null, 9]);
    const expectedOutput = [1, 3, 9];

    const result = largestValues(tree.root);

    expect(result).toEqual(expectedOutput);
  });
});
