import { ListNode } from '../../utils/list';

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const set = new Set(nums);

  const dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let cur = head;

  while (cur !== null) {
    if (set.has(cur.val)) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }

  return dummy.next;
}

export { modifiedList };
