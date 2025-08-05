import { lowerBound } from '../../utils/lowerbound';
import { upperBound } from '../../utils/upperbound';

/*
  Sliding Window
*/
function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
  const n = fruits.length;
  const pos = new Array(n).fill(0);
  const presum = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    pos[i] = fruits[i][0];
    presum[i] = (i === 0 ? 0 : presum[i - 1]) + fruits[i][1];
  }

  let res = 0;

  let mid = lowerBound(pos, startPos);
  let j = 0;
  for (let i = mid; i < n; i++) {
    while (pos[j] <= startPos && pos[i] - startPos + 2 * (startPos - pos[j]) > k) {
      j++;
    }
    if (pos[j] <= startPos) {
      res = Math.max(res, presum[i] - (j === 0 ? 0 : presum[j - 1]));
    } else if (pos[i] - startPos <= k) {
      res = Math.max(res, presum[i] - (j === 0 ? 0 : presum[j - 1]));
    }
  }

  mid = upperBound(pos, startPos) - 1;
  j = n - 1;
  for (let i = mid; i >= 0; i--) {
    while (pos[j] >= startPos && startPos - pos[i] + 2 * (pos[j] - startPos) > k) {
      j--;
    }
    if (pos[j] >= startPos) {
      res = Math.max(res, presum[j] - (i === 0 ? 0 : presum[i - 1]));
    } else if (startPos - pos[i] <= k) {
      res = Math.max(res, presum[j] - (i === 0 ? 0 : presum[i - 1]));
    }
  }

  return res;
}

export { maxTotalFruits };
