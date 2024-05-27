/*
  brute force
*/
function specialArray0(nums: number[]): number {
  const n = nums.length;

  for (let x = 0; x <= n; x++) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] >= x) count++;
    }
    if (count === x) return x;
  }

  return -1;
}

/*
  binary search
  因為有唯一可行解，可以用 left <= right
*/
function specialArray1(nums: number[]): number {
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const x = Math.ceil((left + right) / 2);
    let count = 0;
    for (const num of nums) {
      if (num >= x) count++;
    }

    if (count === x) return x;

    if (count > x) {
      left = x + 1;
    } else {
      right = x - 1;
    }
  }

  return -1;
}

/*
  O(n) solution
*/
function specialArray(nums: number[]): number {
  const n = nums.length;
  const freq = Array.from({ length: n + 1 }, () => 0);

  for (const num of nums) {
    freq[Math.min(num, n)] += 1;
  }

  let count = 0;
  for (let x = n; x >= 1; x--) {
    count += freq[x];
    if (count === x) return x;
  }

  return -1;
}

export { specialArray };
