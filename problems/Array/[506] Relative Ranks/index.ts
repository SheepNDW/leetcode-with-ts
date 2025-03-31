import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

/*
  PQ
*/
function findRelativeRanks(score: number[]): string[] {
  // [idx, score]
  const pq = new MaxPriorityQueue((el: number[]) => el[1]);
  score.forEach((s, i) => pq.enqueue([i, s]));

  const n = score.length;
  const ranks: string[] = Array(n);

  for (let i = 1; i <= n; i++) {
    const [idx, _] = pq.dequeue()!;

    if (i === 1) {
      ranks[idx] = 'Gold Medal';
    } else if (i === 2) {
      ranks[idx] = 'Silver Medal';
    } else if (i === 3) {
      ranks[idx] = 'Bronze Medal';
    } else {
      ranks[idx] = `${i}`;
    }
  }

  return ranks;
}

/*
  Sorting
*/
function findRelativeRanks1(score: number[]): string[] {
  const indexedScores = score.map((s, i) => [s, i]);
  indexedScores.sort((a, b) => b[0] - a[0]);

  const ranks = Array(score.length);

  indexedScores.forEach(([_, index], rank) => {
    if (rank === 0) {
      ranks[index] = 'Gold Medal';
    } else if (rank === 1) {
      ranks[index] = 'Silver Medal';
    } else if (rank === 2) {
      ranks[index] = 'Bronze Medal';
    } else {
      ranks[index] = (rank + 1).toString();
    }
  });

  return ranks;
}

export { findRelativeRanks };
