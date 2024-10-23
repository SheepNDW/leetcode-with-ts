import { describe, expect, it } from 'vitest';
import { replaceValueInTree } from '.';
import { Tree, treeToArray } from '../../utils/tree';

describe.skip('replaceValueInTree', () => {
  it('example 1', () => {
    const root = new Tree().build([5, 4, 9, 1, 10, null, 7]).root;

    const result = replaceValueInTree(root);
    const arr = treeToArray(result);

    expect(arr).toEqual([0, 0, 0, 7, 7, null, 11]);
  });

  it('example 2', () => {
    const root = new Tree().build([3, 1, 2]).root;

    const result = replaceValueInTree(root);
    const arr = treeToArray(result);

    expect(arr).toEqual([0, 0, 0]);
  });
});
