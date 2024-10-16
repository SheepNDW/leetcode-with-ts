import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxKelements(nums: number[], k: number): number {
  const pq = new MaxPriorityQueue({ priority: (el: number) => el });
  nums.forEach((num) => pq.enqueue(num));

  let score = 0;

  while (k--) {
    const maxVal = pq.dequeue().element;
    score += maxVal;

    const newVal = Math.ceil(maxVal / 3);
    pq.enqueue(newVal);
  }

  return score;
}

export { maxKelements };
