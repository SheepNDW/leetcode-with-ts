function singleNumber0(nums: number[]): number[] {
  let xor = 0;
  for (const n of nums) {
    xor ^= n;
  }

  let diffBit = 1;
  while (!(xor & diffBit)) {
    diffBit <<= 1;
  }

  let a = 0;
  let b = 0;
  for (const n of nums) {
    if (diffBit & n) {
      a ^= n;
    } else {
      b ^= n;
    }
  }

  return [a, b];
}

/*
  alternative
*/
function singleNumber(nums: number[]): number[] {
  let xor = 0;
  for (const n of nums) {
    xor ^= n;
  }

  let d = xor ^ (xor & (xor - 1));

  let a = 0;
  let b = 0;
  for (const n of nums) {
    if (d & n) {
      a ^= n;
    } else {
      b ^= n;
    }
  }

  return [a, b];
}

export { singleNumber };
