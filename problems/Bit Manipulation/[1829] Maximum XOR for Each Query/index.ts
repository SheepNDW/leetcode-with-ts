/*
  0101100
    10000 (maximumbit = 2)
     1111 -> mask (我們希望讓後面最大)


  xi ^ k = mask => k = xi ^ mask
*/
function getMaximumXor(nums: number[], maximumBit: number): number[] {
  let xor = 0;
  for (const n of nums) {
    xor ^= n;
  }

  const mask = (1 << maximumBit) - 1;
  const ans: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    ans.push(xor ^ mask);
    xor ^= nums[i];
  }

  return ans;
}

export { getMaximumXor };
