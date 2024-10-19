import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function longestDiverseString(a: number, b: number, c: number): string {
  const pq = new MaxPriorityQueue({ priority: (el: [string, number]) => el[1] });
  if (a !== 0) pq.enqueue(['a', a]);
  if (b !== 0) pq.enqueue(['b', b]);
  if (c !== 0) pq.enqueue(['c', c]);

  let res = '';

  while (!pq.isEmpty()) {
    if (pq.size() === 1) {
      const top = pq.front().element;
      const k = Math.min(top[1], 2);
      res += top[0].repeat(k);
      return res;
    }

    const x = pq.dequeue().element;
    const y = pq.dequeue().element;

    const k = Math.min(1 + x[1] - y[1], 2);

    res += x[0].repeat(k);
    res += y[0];

    x[1] -= k;
    y[1] -= 1;

    if (x[1] !== 0) pq.enqueue(x);
    if (y[1] !== 0) pq.enqueue(y);
  }

  return res;
}

export { longestDiverseString };
