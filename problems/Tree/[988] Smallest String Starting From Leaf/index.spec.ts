import { describe, expect, it } from 'vitest';
import { smallestFromLeaf } from '.';
import { Tree } from '../../utils/tree';

describe.skip('smallestFromLeaf', () => {
  it('should return "dba" for the tree built from [0,1,2,3,4,3,4]', () => {
    const tree = new Tree();
    tree.build([0, 1, 2, 3, 4, 3, 4]);
    const result = smallestFromLeaf(tree.root);

    expect(result).toBe('dba');
  });

  it('should return "adz" for the tree built from [25,1,3,1,3,0,2]', () => {
    const tree = new Tree();
    tree.build([25, 1, 3, 1, 3, 0, 2]);
    const result = smallestFromLeaf(tree.root);

    expect(result).toBe('adz');
  });

  it('should return "abc" for the tree built from [2,2,1,null,1,0,null,0]', () => {
    const tree = new Tree();
    tree.build([2, 2, 1, null, 1, 0, null, 0]);
    const result = smallestFromLeaf(tree.root);

    expect(result).toBe('abc');
  });

  it('should return "bae" for the tree built from [4,0,1,1]', () => {
    const tree = new Tree();
    tree.build([4, 0, 1, 1]);
    const result = smallestFromLeaf(tree.root);

    expect(result).toBe('bae');
  });
});
