import { ListNode } from '../../utils/list';

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  let prevNode = list1;
  let nextNode: ListNode | null = null;

  let current: ListNode | null = list1;
  let index = 0;
  while (current !== null) {
    if (index === a - 1) prevNode = current;
    if (index === b) {
      nextNode = current.next;
      break;
    }
    index++;
    current = current.next;
  }

  prevNode.next = list2;
  current = list2;
  while (current !== null && current.next !== null) {
    current = current.next;
  }
  current!.next = nextNode;

  return list1;
}

export { mergeInBetween };
