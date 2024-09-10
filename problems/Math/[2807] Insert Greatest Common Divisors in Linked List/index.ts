import { ListNode } from '../../utils/list';

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let cur = head;

  while (cur && cur.next) {
    const next = cur.next;
    const gcd = getGCD(cur.val, next.val);
    const node = new ListNode(gcd);

    cur.next = node;
    node.next = next;
    cur = next;
  }

  return head;
}

function getGCD(a: number, b: number): number {
  return b === 0 ? a : getGCD(b, a % b);
}

export { insertGreatestCommonDivisors };
