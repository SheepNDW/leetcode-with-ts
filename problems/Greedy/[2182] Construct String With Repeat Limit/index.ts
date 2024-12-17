import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function repeatLimitedString(s: string, repeatLimit: number): string {
  const freq = new Map<string, number>();

  for (const ch of s) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }

  const pq = new MaxPriorityQueue({ priority: (el: [number, number]) => el[0] });

  for (const [ch, count] of freq) {
    pq.enqueue([ch.charCodeAt(0), count]);
  }

  const res: number[] = [];

  while (!pq.isEmpty()) {
    const [code, count] = pq.dequeue().element;
    const k = Math.min(count, repeatLimit);

    for (let i = 1; i <= k; i++) {
      res.push(code);
    }

    const remain = count - k;

    if (remain > 0) {
      if (pq.isEmpty()) break;

      const [nextCode, nextCount] = pq.dequeue().element;

      res.push(nextCode);

      if (nextCount - 1 > 0) {
        pq.enqueue([nextCode, nextCount - 1]);
      }
      pq.enqueue([code, remain]);
    }
  }

  return String.fromCharCode(...res);
}

export { repeatLimitedString };
