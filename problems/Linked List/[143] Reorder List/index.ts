import { ListNode } from '../../utils/list';

function reorderList(head: ListNode | null): void {
  let dummy = new ListNode(0, head);
  let count = 0;

  let p: ListNode | null = dummy;
  while (p.next) {
    count++;
    p = p.next;
  }

  let q: ListNode | null = dummy;
  for (let i = 0; i < (count + 1) / 2; i++) {
    q = q!.next;
  }
  let head2 = q!.next;
  q!.next = null;

  head2 = reverseList(head2);

  p = head;
  q = head2;
  let h = dummy;

  while (p || q) {
    if (p) {
      h.next = p;
      p = p.next;
      h = h.next;
    }
    if (q) {
      h.next = q;
      q = q.next;
      h = h.next;
    }
  }
}

function reverseList(head: ListNode | null): ListNode | null {
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

export { reorderList };
