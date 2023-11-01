import { describe, expect, it } from 'vitest';
import { findMode } from '.';
import { Tree } from '../../utils/tree';

describe.skip('findMode', () => {
  it('should return [2] when the tree has multiple 2s', () => {
    const tree = new Tree();
    tree.build([1, null, 2, 2]);

    const result = findMode(tree.root);

    expect(result).toEqual([2]);
  });

  it('should return [1, 2] when the tree has multiple 1s and 2s', () => {
    const tree = new Tree();
    tree.build([1, 1, 2, null, null, 2]);

    const result = findMode(tree.root);

    expect(result).toEqual([1, 2]);
  });

  it('should return [0] when the tree has a single node with value 0', () => {
    const tree = new Tree();
    tree.build([0]);

    const result = findMode(tree.root);

    expect(result).toEqual([0]);
  });

  it('should return [] when the tree is empty', () => {
    const tree = new Tree();
    tree.build([]);

    const result = findMode(tree.root);

    expect(result).toEqual([]);
  });
});
