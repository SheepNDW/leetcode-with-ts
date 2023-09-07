import { ListNode } from '../../utils/list';

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let curr = head;
  let prev: ListNode | null = null;
  let index = 1;
  let leftPrev: ListNode | null = null;
  let leftNode: ListNode | null = null;
  let rightNext: ListNode | null = null;

  while (index <= right && curr !== null) {
    if (index === left - 1) {
      leftPrev = curr;
    }

    if (index === left) {
      leftNode = curr;
    }

    if (index >= left && index <= right) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    } else {
      prev = curr;
      curr = curr.next;
    }

    if (index === right) {
      rightNext = curr;
    }

    index++;
  }

  // Reconnect nodes
  if (leftPrev !== null) {
    leftPrev.next = prev;
  } else {
    head = prev;
  }

  if (leftNode !== null) {
    leftNode.next = rightNext;
  }

  return head;
}

export { reverseBetween };
