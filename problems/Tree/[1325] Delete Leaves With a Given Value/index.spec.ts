import { describe, expect, it } from 'vitest';
import { Tree, treeToArray } from '../../utils/tree';
import { removeLeafNodes } from '.';

describe.skip('removeLeafNodes', () => {
  it('should remove leaf nodes with target value 2 and update tree accordingly', () => {
    const tree = new Tree().build([1, 2, 3, 2, null, 2, 4]);
    const target = 2;
    const expectedArray = [1, null, 3, null, 4];
    const result = removeLeafNodes(tree.root, target);
    expect(treeToArray(result)).toEqual(expectedArray);
  });

  it('should remove leaf nodes with target value 3 and update tree accordingly', () => {
    const tree = new Tree().build([1, 3, 3, 3, 2]);
    const target = 3;
    const expectedArray = [1, 3, null, null, 2];
    const result = removeLeafNodes(tree.root, target);
    expect(treeToArray(result)).toEqual(expectedArray);
  });

  it('should remove leaf nodes with target value 2 and update tree accordingly', () => {
    const tree = new Tree().build([1, 2, null, 2, null, 2]);
    const target = 2;
    const expectedArray = [1];
    const result = removeLeafNodes(tree.root, target);
    expect(treeToArray(result)).toEqual(expectedArray);
  });
});
