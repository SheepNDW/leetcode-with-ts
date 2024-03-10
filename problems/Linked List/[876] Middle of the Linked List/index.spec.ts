import { describe, expect, it } from 'vitest';
import { middleNode } from '.';
import { compareLists, createList } from '../../utils/list';

describe.skip('middleNode', () => {
  it('should retrun [3,4,5] for head=[1,2,3,4,5]', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const expected = createList([3, 4, 5]);

    const midNode = middleNode(head);

    expect(compareLists(midNode, expected)).toBe(true);
  });

  it('should retrun [4,5,6] for head=[1,2,3,4,5,6]', () => {
    const head = createList([1, 2, 3, 4, 5, 6]);
    const expected = createList([4, 5, 6]);

    const midNode = middleNode(head);

    expect(compareLists(midNode, expected)).toBe(true);
  });
});
