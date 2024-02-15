function rearrangeArray0(nums: number[]): number[] {
  const positive: number[] = [];
  const negative: number[] = [];

  nums.forEach((num) => (num > 0 ? positive.push(num) : negative.push(num)));

  const result: number[] = [];

  for (let i = 0; i < positive.length; i++) {
    result.push(positive[i], negative[i]);
  }

  return result;
}

/*
  Two Pointer: one pass to populate result

  nums [3, 1, -2, -5, 2, -4]
  ans  [ ,  ,   ,   ,  ,   ]
        p  n

  >    [3, , , , , ]
          n p
  >    [3, ,1, , , ]
          n     p
  >    [3,-2,1, , , ]
               n p
*/
function rearrangeArray(nums: number[]): number[] {
  const n = nums.length;
  let posIdx = 0;
  let negIdx = 1;

  const result: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result[posIdx] = nums[i];
      posIdx += 2;
    } else {
      result[negIdx] = nums[i];
      negIdx += 2;
    }
  }

  return result;
}

export { rearrangeArray };
