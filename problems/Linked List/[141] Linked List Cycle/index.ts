import { ListNode } from '../../utils/list';

/*
  hash table
*/
function hasCycle0(head: ListNode | null): boolean {
  const visited = new Set<ListNode>();

  let current = head;
  while (current !== null) {
    if (visited.has(current)) {
      return true;
    }

    visited.add(current);
    current = current.next;
  }

  return false;
}

/*
  Floyd's Tortoise and Hare
*/
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

export { hasCycle };
