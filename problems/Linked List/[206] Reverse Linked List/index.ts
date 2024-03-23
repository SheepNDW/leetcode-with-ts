import { ListNode } from '../../utils/list';

/*
  iteratively solution
 */
function reverseList0(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

/*
  recursively solution
 */
function reverseList(head: ListNode | null): ListNode | null {
  const _reverse = (prev: ListNode | null, curr: ListNode | null): ListNode | null => {
    if (!curr) return prev;
    const next = curr.next;
    curr.next = prev;
    return _reverse(curr, next);
  };

  return _reverse(null, head);
}

export { reverseList };
