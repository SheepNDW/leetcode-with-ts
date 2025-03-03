function pivotArray0(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const smaller: number[] = [];
  const greater: number[] = [];
  const pivots: number[] = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] < pivot) {
      smaller.push(nums[i]);
    } else if (nums[i] > pivot) {
      greater.push(nums[i]);
    } else {
      pivots.push(nums[i]);
    }
  }

  return [...smaller, ...pivots, ...greater];
}

/*
  In-place
*/
function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const res = Array.from({ length: n }, () => 0);

  let i = 0;
  let j = n - 1;
  let i2 = 0;
  let j2 = n - 1;

  while (i < n) {
    if (nums[i] < pivot) {
      res[i2] = nums[i];
      i2 += 1;
    }

    if (nums[j] > pivot) {
      res[j2] = nums[j];
      j2 -= 1;
    }

    i += 1;
    j -= 1;
  }

  while (i2 <= j2) {
    res[i2] = res[j2] = pivot;
    i2 += 1;
    j2 -= 1;
  }

  return res;
}

export { pivotArray };
