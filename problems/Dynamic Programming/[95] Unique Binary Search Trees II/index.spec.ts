import { describe, expect, it } from 'vitest';
import { TreeNode } from '../../utils/tree';
import { generateTrees } from '.';

describe('generateTrees', () => {
  it('should generate unique BSTs for n = 1', () => {
    const n = 1;
    const expected: Array<TreeNode | null> = [new TreeNode(1)];

    const result = generateTrees(n);

    expect(result).toEqual(expected);
  });

  it('should generate unique BSTs for n = 3', () => {
    const n = 3;
    const tree1 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    const tree2 = new TreeNode(1, null, new TreeNode(3, new TreeNode(2)));
    const tree3 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const tree4 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)));
    const tree5 = new TreeNode(3, new TreeNode(2, new TreeNode(1)));
    const expected: Array<TreeNode | null> = [tree1, tree2, tree3, tree4, tree5];

    const result = generateTrees(n);

    expect(result).toEqual(expected);
  });
});
