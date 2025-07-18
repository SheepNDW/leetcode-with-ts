import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

function minimumDifference(nums: number[]): number {
  const n = nums.length / 3;

  const leftMin = new Array(n).fill(0);
  const maxPq = new MaxPriorityQueue<number>();
  let sum = 0;

  for (let i = 0; i < 3 * n; i++) {
    maxPq.push(nums[i]);
    sum += nums[i];
    if (maxPq.size() > n) {
      sum -= maxPq.pop()!;
    }
    leftMin[i] = sum;
  }

  const rightMax = new Array(n).fill(0);
  const minPq = new MinPriorityQueue<number>();
  sum = 0;

  for (let i = 3 * n - 1; i >= 0; i--) {
    minPq.push(nums[i]);
    sum += nums[i];
    if (minPq.size() > n) {
      sum -= minPq.pop()!;
    }
    rightMax[i] = sum;
  }

  let res = Number.MAX_SAFE_INTEGER;
  for (let i = n - 1; i < 2 * n; i++) {
    res = Math.min(res, leftMin[i] - rightMax[i + 1]);
  }
  return res;
}

export { minimumDifference };
