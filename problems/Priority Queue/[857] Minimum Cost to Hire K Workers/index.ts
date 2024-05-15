import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  wageEarned[i] / quality[i] = unitWage
  wageEarned[i] / quality[i] >= wage[i] / quality[i]
  -> unitWage >= wage[i] / quality[i]

  unitWage must be the maximum value of unitWageExpected of k workers
*/
function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  const persons: { quality: number; ratio: number }[] = [];
  for (let i = 0; i < quality.length; i++) {
    persons.push({ quality: quality[i], ratio: wage[i] / quality[i] });
  }
  persons.sort((a, b) => a.ratio - b.ratio);

  const pq = new MaxPriorityQueue({ priority: (el: number) => el });
  let sumQuality = 0;
  let result = Number.MAX_VALUE;

  for (let i = 0; i < persons.length; i++) {
    const unitWage = persons[i].ratio;
    sumQuality += persons[i].quality;

    while (pq.size() > k - 1) {
      sumQuality -= pq.dequeue().element;
    }
    if (pq.size() === k - 1) {
      result = Math.min(result, unitWage * sumQuality);
    }
    pq.enqueue(persons[i].quality);
  }

  return result;
}

export { mincostToHireWorkers };
