import { describe, expect, it } from 'vitest';
import { createBinaryTree } from '.';
import { treeToArray } from '../../utils/tree';

describe.skip('createBinaryTree', () => {
  it('should return the correct tree for [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]', () => {
    const descriptions = [
      [20, 15, 1],
      [20, 17, 0],
      [50, 20, 1],
      [50, 80, 0],
      [80, 19, 1],
    ];

    const tree = createBinaryTree(descriptions);

    expect(treeToArray(tree)).toEqual([50, 20, 80, 15, 17, 19]);
  });

  it('should return the correct tree for [[1,2,1],[2,3,0],[3,4,1]]', () => {
    const descriptions = [
      [1, 2, 1],
      [2, 3, 0],
      [3, 4, 1],
    ];

    const tree = createBinaryTree(descriptions);

    expect(treeToArray(tree)).toEqual([1, 2, null, null, 3, 4]);
  });
});
