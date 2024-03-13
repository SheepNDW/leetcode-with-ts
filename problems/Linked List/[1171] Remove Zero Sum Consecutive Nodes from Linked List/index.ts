import { ListNode } from '../../utils/list';

/*
  prefix sum for each consecutive sequence
  TC: O(n^2)
*/
function removeZeroSumSublists0(head: ListNode | null): ListNode | null {
  let front = new ListNode(0, head);
  let start: ListNode | null = front;

  while (start !== null) {
    let prefixSum = 0;
    let end = start.next;

    while (end !== null) {
      prefixSum += end.val;

      if (prefixSum === 0) {
        start.next = end.next;
      }
      end = end.next;
    }

    start = start.next;
  }

  return front.next;
}

/*
  prefix sum + hash
*/
function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let front = new ListNode(0, head);
  let current: ListNode | null = front;

  let prefixSum = 0;
  const prefixSumToNode = new Map<number, ListNode>();

  while (current !== null) {
    prefixSum += current.val;

    // If prefixSum is already in the hashmap,
    // we have found a zero-sum sequence:
    if (prefixSumToNode.has(prefixSum)) {
      const prev = prefixSumToNode.get(prefixSum)!;
      current = prev.next!;

      let p = prefixSum + current.val;
      while (p !== prefixSum) {
        prefixSumToNode.delete(p);
        current = current.next!;
        p += current.val;
      }

      prev.next = current.next;
    } else {
      prefixSumToNode.set(prefixSum, current);
    }

    current = current.next;
  }

  return front.next;
}

export { removeZeroSumSublists };
