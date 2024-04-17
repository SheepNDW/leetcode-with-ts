import { describe, expect, it } from 'vitest';
import { addOneRow } from '.';
import { Tree, TreeNode } from '../../utils/tree';

describe.skip('addOneRow', () => {
  it('should return [4,1,1,2,null,null,6,3,1,5] for root = [4,2,6,3,1,5], val = 1, depth = 2', () => {
    const root = new Tree().build([4, 2, 6, 3, 1, 5]).root;
    const val = 1;
    const depth = 2;
    const expected = [4, 1, 1, 2, null, null, 6, 3, 1, 5];

    const result = addOneRow(root, val, depth);

    expect(treeToArray(result)).toEqual(expected);
  });

  it('should return [4,2,null,1,1,3,null,null,1] for root = [4,2,null,3,1], val = 1, depth = 3', () => {
    const root = new Tree().build([4, 2, null, 3, 1]).root;
    const val = 1;
    const depth = 3;
    const expected = [4, 2, null, 1, 1, 3, null, null, 1];

    const result = addOneRow(root, val, depth);

    expect(treeToArray(result)).toEqual(expected);
  });
});

function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];

  const queue: (TreeNode | null)[] = [root];
  const result: (number | null)[] = [];

  while (queue.length) {
    const current = queue.shift()!;
    if (current === null) {
      result.push(null);
    } else {
      result.push(current.val);
      // 只有當節點存在時才將其子節點加入 queue
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  // 移除結尾的多餘 null
  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
