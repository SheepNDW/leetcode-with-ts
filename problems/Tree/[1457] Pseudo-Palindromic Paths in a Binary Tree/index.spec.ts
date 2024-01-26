import { describe, expect, it } from 'vitest';
import { pseudoPalindromicPaths } from '.';
import { Tree } from '../../utils/tree';

describe.skip('pseudoPalindromicPaths', () => {
  it('should return 2 for the tree [2,3,1,3,1,null,1]', () => {
    const tree = new Tree();
    tree.build([2, 3, 1, 3, 1, null, 1]);

    const result = pseudoPalindromicPaths(tree.root);

    expect(result).toBe(2);
  });

  it('should return 1 for the tree [2,1,1,1,3,null,null,null,null,null,1]', () => {
    const tree = new Tree();
    tree.build([2, 1, 1, 1, 3, null, null, null, null, null, 1]);

    const result = pseudoPalindromicPaths(tree.root);

    expect(result).toBe(1);
  });

  it('should return 1 for the tree [9]', () => {
    const tree = new Tree();
    tree.build([9]);

    const result = pseudoPalindromicPaths(tree.root);

    expect(result).toBe(1);
  });
});
