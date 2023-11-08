import { MinHeap } from '../../utils/Heap';

function eliminateMaximum(dist: number[], speed: number[]): number {
  const n = dist.length;
  const arrivedRounds: number[] = [];

  for (let i = 0; i < n; i++) {
    const rounds = Math.ceil(dist[i] / speed[i]);
    arrivedRounds.push(rounds);
  }

  arrivedRounds.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (arrivedRounds[i] <= i) {
      return i;
    }
  }

  return n;
}

// min heap
function eliminateMaximum1(dist: number[], speed: number[]): number {
  const heap = new MinHeap<number>();
  const n = dist.length;

  for (let i = 0; i < n; i++) {
    heap.push(dist[i] / speed[i]);
  }

  let eliminated = 0;
  while (!heap.isEmpty()) {
    const monster = heap.pop() as number;
    if (monster <= eliminated) {
      break;
    }
    eliminated++;
  }

  return eliminated;
}

export { eliminateMaximum };
