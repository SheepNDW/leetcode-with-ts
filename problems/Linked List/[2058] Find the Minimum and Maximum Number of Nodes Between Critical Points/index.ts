import { ListNode } from '../../utils/list';

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let firstPoint = -1;
  let lastPoint = -1;
  let minDistance = Infinity;

  let prev: ListNode | null = null;
  let cur = head;
  let idx = 0;
  while (cur && cur.next) {
    if (prev) {
      if (
        (prev.val > cur.val && cur.val < cur.next.val) ||
        (prev.val < cur.val && cur.val > cur.next.val)
      ) {
        if (firstPoint === -1) {
          firstPoint = idx;
        } else {
          minDistance = Math.min(minDistance, idx - lastPoint);
        }
        lastPoint = idx;
      }
    }
    prev = cur;
    cur = cur.next;
    idx++;
  }

  if (firstPoint === lastPoint) {
    return [-1, -1];
  }

  return [minDistance, lastPoint - firstPoint];
}

export { nodesBetweenCriticalPoints };
