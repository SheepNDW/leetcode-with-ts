import { describe, expect, it } from 'vitest';
import { averageOfSubtree } from '.';
import { Tree } from '../../utils/tree';

describe.skip('averageOfSubtree', () => {
  it('should return the correct count for example 1', () => {
    const tree = new Tree().build([4, 8, 5, 0, 1, null, 6]);

    const result = averageOfSubtree(tree.root);

    expect(result).toBe(5);
  });

  it('should return the correct count for example 2', () => {
    const tree = new Tree().build([1]);

    const result = averageOfSubtree(tree.root);

    expect(result).toBe(1);
  });
});
