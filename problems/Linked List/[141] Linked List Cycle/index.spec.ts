import { describe, expect, it } from 'vitest';
import { ListNode } from '../../utils/list';
import { hasCycle } from '.';

describe('hasCycle', () => {
  it('should return true when there is a cycle', () => {
    const list = createCycleList([3, 2, 0, -4], 1);
    expect(hasCycle(list)).toBe(true);
  });

  it('should return true when there is another cycle', () => {
    const list = createCycleList([1, 2], 0);
    expect(hasCycle(list)).toBe(true);
  });

  it('should return false when there is no cycle', () => {
    const list = createCycleList([1], -1);
    expect(hasCycle(list)).toBe(false);
  });
});

function createCycleList(values: number[], pos: number = -1): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;
  let nodes: ListNode[] = [];

  values.forEach((val) => {
    const newNode = new ListNode(val);
    nodes.push(newNode);

    if (current) {
      current.next = newNode;
    } else {
      head = newNode;
    }
    current = newNode;
  });

  if (pos !== -1 && nodes.length > pos) {
    current!.next = nodes[pos];
  }

  return head;
}
