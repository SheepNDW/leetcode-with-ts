/*
  hash table 
  TC: O(n)
  SC: O(n)
*/
function missingNumber(nums: number[]): number {
  const hash = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!hash.has(i)) return i;
  }

  return -1;
}

/*
  math
  TC: O(n)
  SC: O(1)
*/
function missingNumber1(nums: number[]): number {
  const n = nums.length;
  const correctSum = (n * (n + 1)) / 2;
  const curSum = nums.reduce((sum, cur) => (sum += cur), 0);

  return correctSum - curSum;
}

/*
  bit: XOR
  1. 任何數字和自己做 XOR 操作的結果為 0，即 a ^ a = 0。
  2. 任何數字和 0 做 XOR 操作的結果為數字本身，即 a ^ 0 = a。
  3. XOR 操作滿足交換律和結合律，即 a ^ b ^ a = b ^ (a ^ a) = b ^ 0 = b。
*/
function missingNumber2(nums: number[]): number {
  let xorSum = 0;
  // 首先，對範圍 [0, n] 內的所有數字進行 XOR 操作
  for (let i = 0; i <= nums.length; i++) {
    xorSum ^= i;
  }
  // 然後，對陣列 nums 中的所有數字進行 XOR 操作
  for (const num of nums) {
    xorSum ^= num;
  }
  // 最後留下的就是缺失的數字
  return xorSum;
}

export { missingNumber };
