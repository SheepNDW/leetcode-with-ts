import { ListNode } from '../../utils/list';

/*
  reverse list
*/
function doubleIt0(head: ListNode | null): ListNode | null {
  function reverse(head: ListNode | null) {
    let prev: ListNode | null = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }

  head = reverse(head);
  let carry = 0;
  let current = head;
  let prev = null;

  while (current) {
    const newValue = current.val * 2 + carry;
    current.val = newValue % 10;

    if (newValue > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    prev = current;
    current = current.next;
  }

  if (carry !== 0) {
    prev!.next = new ListNode(carry);
  }

  return reverse(head);
}

/*
  single pointer
*/
function doubleIt(head: ListNode | null): ListNode | null {
  if (head && head.val > 4) {
    head = new ListNode(0, head);
  }

  let cur = head;
  while (cur) {
    cur.val = (cur.val * 2) % 10;

    if (cur.next !== null && cur.next.val > 4) {
      cur.val += 1;
    }

    cur = cur.next;
  }

  return head;
}

export { doubleIt };
