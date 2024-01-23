// hash map
function findErrorNums0(nums: number[]): number[] {
  const counter = new Array(nums.length).fill(0);

  nums.forEach((num) => counter[num - 1]++);

  return counter.reduce((ans, c, num) => {
    if (c === 0) ans[1] = num + 1;
    if (c === 2) ans[0] = num + 1;
    return ans;
  }, [] as number[]);
}

// ==== Alternatives ====
function findErrorNums1(nums: number[]): number[] {
  const counter = new Array<number>(nums.length + 1).fill(0);

  nums.forEach((num) => counter[num]++);

  return [counter.indexOf(2), counter.lastIndexOf(0)];
}

// in-place solution
// 迭代的同時將出現過的數字對應的 index 上的值取反
// 最後剩下的兩個正數就是 duplicate 和 missing
function findErrorNums(nums: number[]): number[] {
  const ans = [0, 0]; // [duplicate, missing]

  for (let n of nums) {
    n = Math.abs(n);
    nums[n - 1] = -nums[n - 1];
    if (nums[n - 1] > 0) ans[0] = n;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && i + 1 !== ans[0]) {
      ans[1] = i + 1;
      break;
    }
  }

  return ans;
}

export { findErrorNums };
