/*
  DFS
*/
function beautifulSubsets0(nums: number[], k: number): number {
  const n = nums.length;
  let count = 0;
  const candidate: number[] = [];

  function backtrack(cur: number) {
    if (cur === n) return;

    for (let i = cur; i < n; i++) {
      if (isBeautiful(candidate, nums[i], k)) {
        candidate.push(nums[i]);
        count++;
        backtrack(i + 1);
        candidate.pop();
      }
    }
  }

  backtrack(0);
  return count;
}

function isBeautiful(nums: number[], curNum: number, k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - curNum) === k) {
      return false;
    }
  }
  return true;
}

/*
  num % k = 0, 1, 2, ..., k-1
  [a....][b....][c....] ... [z....]
    k1     k2     k3          k(n-1)
  
  return k1 * k2 * k3 ... * k(n-1)

          [2,6,8,10]
  freq t = 1 1 3 2

  take[i]: the number of combs if we take the ith element
  noTake[i]: the number of combs if we do not take the ith element

  if (Math.abs(nums[i] - nums[i-1]) == k) {
    take[i] = noTake[i-1] * (2^t - 1);
    noTake[i] = (take[i-1] + noTake[i-1]) * 1;
  } else {
    take[i] = (take[i-1] + noTake[i-1]) * (2^t - 1);
    noTake[i] = (take[i-1] + noTake[i-1]) * 1
  }
*/
function beautifulSubsets(nums: number[], k: number): number {
  const count = new Map<number, number>();
  nums.forEach((num) => count.set(num, (count.get(num) ?? 0) + 1));

  const map = new Map<number, { val: number; freq: number }[]>();
  for (const [val, freq] of count) {
    const remainder = val % k;
    if (!map.has(remainder)) {
      map.set(remainder, []);
    }
    map.get(remainder)!.push({ val, freq });
  }

  let result = 1;
  for (const arr of map.values()) {
    arr.sort((a, b) => a.val - b.val);
    let take = 0;
    let noTake = 1;

    for (let i = 0; i < arr.length; i++) {
      let takeTemp = take;
      let noTakeTemp = noTake;
      if (i > 0 && Math.abs(arr[i].val - arr[i - 1].val) === k) {
        take = noTakeTemp * (2 ** arr[i].freq - 1);
        noTake = (takeTemp + noTakeTemp) * 1;
      } else {
        take = (takeTemp + noTakeTemp) * (2 ** arr[i].freq - 1);
        noTake = (takeTemp + noTakeTemp) * 1;
      }
    }

    result = result * (take + noTake);
  }

  return result - 1;
}

export { beautifulSubsets };
