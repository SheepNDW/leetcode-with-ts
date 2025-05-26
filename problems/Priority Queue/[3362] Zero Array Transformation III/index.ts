import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxRemoval(nums: number[], queries: number[][]): number {
  queries.sort((a, b) => a[0] - b[0]);
  const pq = new MaxPriorityQueue<number>();

  const n = nums.length;
  const diff = new Array(n + 1).fill(0);

  let operations = 0;
  let j = 0;
  for (let i = 0; i < n; i++) {
    operations += diff[i];

    while (j < queries.length && queries[j][0] === i) {
      pq.push(queries[j][1]);
      j++;
    }
    while (operations < nums[i] && !pq.isEmpty() && pq.front()! >= i) {
      operations += 1;
      diff[pq.pop()! + 1] -= 1;
    }
    if (operations < nums[i]) {
      return -1;
    }
  }

  return pq.size();
}

export { maxRemoval };
