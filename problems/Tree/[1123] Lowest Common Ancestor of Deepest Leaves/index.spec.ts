import { describe, expect, it } from 'vitest';
import { lcaDeepestLeaves } from '.';
import { Tree, treeToArray } from '../../utils/tree';

describe('lcaDeepestLeaves', () => {
  it('example 1', () => {
    const root = new Tree().build([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).root;
    const result = lcaDeepestLeaves(root);
    expect(treeToArray(result)).toEqual([2, 7, 4]);
  });

  it('example 2', () => {
    const root = new Tree().build([1]).root;
    const result = lcaDeepestLeaves(root);
    expect(treeToArray(result)).toEqual([1]);
  });

  it('example 3', () => {
    const root = new Tree().build([0, 1, 3, null, 2]).root;
    const result = lcaDeepestLeaves(root);
    expect(treeToArray(result)).toEqual([2]);
  });
});
