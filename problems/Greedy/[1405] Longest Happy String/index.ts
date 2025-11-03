import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function longestDiverseString(a: number, b: number, c: number): string {
  const pq = new MaxPriorityQueue((el: [string, number]) => el[1]);

  if (a > 0) pq.push(['a', a]);
  if (b > 0) pq.push(['b', b]);
  if (c > 0) pq.push(['c', c]);

  let res = '';

  while (!pq.isEmpty()) {
    const top = pq.pop()!;
    const second = pq.pop();

    const k = Math.min(2, top[1] - (second?.[1] ?? 0));
    res += top[0].repeat(k);
    top[1] -= k;

    if (!second) break;

    res += second[0];
    second[1] -= 1;

    if (top[1] > 0) pq.push(top);
    if (second[1] > 0) pq.push(second);
  }

  return res;
}

export { longestDiverseString };
