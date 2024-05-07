import { ListNode } from '../../utils/list';

/*
  monotonic stack TC: O(n) SC: O(n)
*/
function removeNodes1(head: ListNode | null): ListNode | null {
  const stack: number[] = [];
  let current = head;

  while (current) {
    while (stack.length && current.val > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(current.val);
    current = current.next;
  }

  let dummy = new ListNode();
  current = dummy;
  for (const n of stack) {
    current.next = new ListNode(n);
    current = current?.next;
  }

  return dummy.next;
}

/*
  reverse twice
*/
function removeNodes(head: ListNode | null): ListNode | null {
  head = reverse(head);
  let current = head;
  let curMax = current!.val;

  while (current?.next) {
    if (current.next.val < curMax) {
      current.next = current.next.next;
    } else {
      current = current.next;
      curMax = current.val;
    }
  }

  return reverse(head);
}

function reverse(head: ListNode | null) {
  let current = head;
  let prev: ListNode | null = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

export { removeNodes };
