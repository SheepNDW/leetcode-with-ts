import { describe, expect, it } from 'vitest';
import { delNodes } from '.';
import { Tree, treeToArray } from '../../utils/tree';

describe.skip('delNodes', () => {
  it('should return the roots of the trees in the remaining forest (1)', () => {
    const root = new Tree().build([1, 2, 3, 4, 5, 6, 7]).root;
    const to_delete = [3, 5];
    const expectedArray = [[1, 2, null, 4], [6], [7]];

    const result = delNodes(root, to_delete);
    const resultArray = result.map((node) => treeToArray(node));

    expect(resultArray).toHaveLength(expectedArray.length);
    expect(resultArray).toEqual(expect.arrayContaining(expectedArray));
  });

  it('should return the roots of the trees in the remaining forest (2)', () => {
    const root = new Tree().build([1, 2, 4, null, 3]).root;
    const to_delete = [3];
    const expectedArray = [[1, 2, 4]];

    const result = delNodes(root, to_delete);
    const resultArray = result.map((node) => treeToArray(node));

    expect(resultArray).toHaveLength(expectedArray.length);
    expect(resultArray).toEqual(expect.arrayContaining(expectedArray));
  });
});
