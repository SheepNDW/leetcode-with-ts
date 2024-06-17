import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  sort    +   PQ
  capital     profit
*/
function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
  const tasks: { capital: number; profit: number }[] = [];
  for (let i = 0; i < profits.length; i++) {
    tasks.push({ capital: capital[i], profit: profits[i] });
  }
  tasks.sort((a, b) => a.capital - b.capital);

  const pq = new MaxPriorityQueue({ priority: (el: number) => el });
  let count = 0;
  let i = 0;
  while (count < k) {
    while (i < tasks.length && tasks[i].capital <= w) {
      pq.enqueue(tasks[i].profit);
      i++;
    }

    if (pq.isEmpty()) break;

    w += pq.dequeue().element;
    count++;
  }

  return w;
}

export { findMaximizedCapital };
