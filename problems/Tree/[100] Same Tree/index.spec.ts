import { describe, expect, it } from 'vitest';
import { isSameTree } from '.';
import { Tree } from '../../utils/tree';

describe.skip('isSameTree', () => {
  it('should return true for two identical trees [1,2,3]', () => {
    const tree1 = new Tree().build([1, 2, 3]);
    const tree2 = new Tree().build([1, 2, 3]);

    const result = isSameTree(tree1.root, tree2.root);

    expect(result).toBe(true);
  });

  it('should return false when trees have different structures [1,2] vs [1,null,2]', () => {
    const tree1 = new Tree().build([1, 2]);
    const tree2 = new Tree().build([1, null, 2]);

    const result = isSameTree(tree1.root, tree2.root);

    expect(result).toBe(false);
  });

  it('should return false for trees with same values but different arrangements [1,2,1] vs [1,1,2]', () => {
    const tree1 = new Tree().build([1, 2, 1]);
    const tree2 = new Tree().build([1, 1, 2]);

    const result = isSameTree(tree1.root, tree2.root);

    expect(result).toBe(false);
  });

  it('should return true for two empty trees', () => {
    const tree1 = new Tree().build([]);
    const tree2 = new Tree().build([]);

    const result = isSameTree(tree1.root, tree2.root);

    expect(result).toBe(true);
  });

  it('should return false for one empty tree and one non-empty tree', () => {
    const tree1 = new Tree().build([]);
    const tree2 = new Tree().build([1]);

    const result = isSameTree(tree1.root, tree2.root);

    expect(result).toBe(false);
  });
});
