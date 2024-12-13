import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function findScore(nums: number[]): number {
  const marked = new Set<number>();
  const pq = new MinPriorityQueue({
    compare: (a: [number, number], b: [number, number]) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;

      return a[1] < b[1] ? -1 : 1;
    },
  });

  nums.forEach((num, i) => pq.enqueue([num, i]));
  let score = 0;

  while (!pq.isEmpty()) {
    // @ts-ignore
    const [num, i] = pq.dequeue();
    if (marked.has(i)) continue;

    score += num;
    marked.add(i - 1);
    marked.add(i + 1);
  }

  return score;
}

export { findScore };
