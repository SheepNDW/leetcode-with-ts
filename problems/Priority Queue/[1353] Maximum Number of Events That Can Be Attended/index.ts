import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function maxEvents(events: number[][]): number {
  events.sort((a, b) => a[0] - b[0]);
  const pq = new MinPriorityQueue<number>();

  let res = 0;
  let i = 0;
  for (let d = 1; d <= 100000; d++) {
    while (i < events.length && events[i][0] <= d) {
      pq.push(events[i][1]);
      i++;
    }

    while (!pq.isEmpty() && pq.front()! < d) {
      pq.pop();
    }
    if (!pq.isEmpty()) {
      pq.pop();
      res++;
    }
  }

  return res;
}

export { maxEvents };
