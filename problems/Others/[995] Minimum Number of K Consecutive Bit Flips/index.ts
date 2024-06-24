/*
  Naive Greedy TLE!!!
  TC: O(nk) n: nums.length
*/
function minKBitFlips0(nums: number[], k: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i; j < i + k; j++) {
        if (j >= nums.length) return -1;

        if (nums[j] === 0) {
          nums[j] = 1;
        } else {
          nums[j] = 0;
        }
      }
      count++;
    }
  }

  return count;
}

/*
  Diff Array
  
  1 1 [0 X X 1] X X X X X
       s     e

  [s,e]

  nums[i] = flips[i] % 2

  flips[i] = flips[i-1] + diff[i]

  diff[s] += 1
  diff[e+1] -= 1
*/
function minKBitFlips(nums: number[], k: number): number {
  const n = nums.length;
  const diff: number[] = new Array(n + 1).fill(0);

  let flips = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    flips += diff[i];
    if (nums[i] + (flips % 2) === 1) continue;
    if (i + k - 1 >= n) return -1;

    diff[i + 1] += 1;
    diff[i + k] -= 1;
    count++;
  }

  return count;
}

export { minKBitFlips };
