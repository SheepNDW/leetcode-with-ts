/*
  brute force (3314 passed but TLE on 3315)
  iterate through all numbers less than n to find x such that (x | (x + 1)) === n
*/
function minBitwiseArray0(nums: number[]): number[] {
  const res: number[] = [];

  for (const n of nums) {
    let ans = -1;
    for (let x = 1; x < n; x++) {
      if ((x | (x + 1)) === n) {
        ans = x;
        break;
      }
    }
    res.push(ans);
  }

  return res;
}

/*
  bit manipulation
*/
function minBitwiseArray(nums: number[]): number[] {
  const res: number[] = [];

  for (const n of nums) {
    let x = -1;
    let d = 1;

    while ((n & d) !== 0) {
      x = n - d;
      d <<= 1;
    }

    res.push(x);
  }

  return res;
}

export { minBitwiseArray };
