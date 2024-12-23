import { describe, expect, it } from 'vitest';
import { reverseOddLevels } from '.';
import { Tree, treeToArray } from '../../utils/tree';

describe.skip('reverseOddLevels', () => {
  it('example 1', () => {
    const root = new Tree().build([2, 3, 5, 8, 13, 21, 34]).root;

    const result = reverseOddLevels(root);
    const resultArr = treeToArray(result);

    expect(resultArr).toEqual([2, 5, 3, 8, 13, 21, 34]);
  });

  it('example 2', () => {
    const root = new Tree().build([7, 13, 11]).root;

    const result = reverseOddLevels(root);
    const resultArr = treeToArray(result);

    expect(resultArr).toEqual([7, 11, 13]);
  });

  it('example 3', () => {
    const root = new Tree().build([0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]).root;

    const result = reverseOddLevels(root);
    const resultArr = treeToArray(result);

    expect(resultArr).toEqual([0, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1]);
  });
});
