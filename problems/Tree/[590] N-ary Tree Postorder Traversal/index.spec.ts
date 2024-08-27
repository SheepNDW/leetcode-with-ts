import { describe, expect, it } from 'vitest';
import { postorder, _Node } from '.';

describe.skip('postorder', () => {
  it('should return [5,6,3,2,4,1] for [1,null,3,2,4,null,5,6]', () => {
    const root = generateRoot([1, null, 3, 2, 4, null, 5, 6]);
    const result = postorder(root);
    expect(result).toEqual([5, 6, 3, 2, 4, 1]);
  });

  it('should return [2,3,4,1] for [1,null,2,3,4]', () => {
    const root = generateRoot([1, null, 2, 3, 4]);
    const result = postorder(root);
    expect(result).toEqual([2, 3, 4, 1]);
  });

  it('should return postorder for given root', () => {
    const root = generateRoot([
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ]);
    const result = postorder(root);
    expect(result).toEqual([2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]);
  });
});

function generateRoot(arr: (number | null)[]): _Node | null {
  if (arr.length === 0) return null;

  const root = new _Node(arr[0]!);
  const queue: _Node[] = [root];

  let i = 2; // 跳過根節點和第一個 null
  while (queue.length && i < arr.length) {
    const parent = queue.shift()!;
    const children: _Node[] = [];

    while (i < arr.length && arr[i] !== null) {
      const child = new _Node(arr[i]!);
      children.push(child);
      queue.push(child);
      i++;
    }

    parent.children = children;
    i++; // 跳過 null，移動到下一個父節點
  }

  return root;
}
