import { describe, expect, it } from 'vitest';
import { largestValues } from '.';
import { Tree } from '../../utils/tree';

describe.skip('largestValues', () => {
  it('example 1', () => {
    const tree = new Tree();
    tree.build([1, 3, 2, 5, 3, null, 9]);
    const expectedOutput = [1, 3, 9];

    const result = largestValues(tree.root);

    expect(result).toEqual(expectedOutput);
  });

  it('example 2', () => {
    const tree = new Tree();
    tree.build([1, 2, 3]);
    const expectedOutput = [1, 3];

    const result = largestValues(tree.root);

    expect(result).toEqual(expectedOutput);
  });

  it('example 3', () => {
    const tree = new Tree();
    tree.build([0, -1]);
    const expectedOutput = [0, -1];

    const result = largestValues(tree.root);

    expect(result).toEqual(expectedOutput);
  });
});
