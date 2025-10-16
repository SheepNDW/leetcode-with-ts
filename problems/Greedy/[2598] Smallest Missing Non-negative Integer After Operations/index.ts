/*
  模擬從 0 開始消耗每個餘數的數量
  當消到某個餘數沒有數字可以消耗時，該餘數對應的數字即為答案
*/
function findSmallestInteger0(nums: number[], value: number): number {
  const count = Array.from({ length: value }, () => 0);

  for (const num of nums) {
    const r = ((num % value) + value) % value;
    count[r] += 1;
  }

  let res = 0;

  while (count[res % value] > 0) {
    count[res % value] -= 1;
    res += 1;
  }

  return res;
}

/*
  直接找最小頻率的餘數
  該餘數的頻率 * value + 該餘數 即為答案
*/
function findSmallestInteger(nums: number[], value: number): number {
  const count = Array.from({ length: value }, () => 0);

  for (const num of nums) {
    const r = ((num % value) + value) % value;
    count[r] += 1;
  }

  let min_count = Number.MAX_SAFE_INTEGER;
  let r = 0;

  for (let i = 0; i < value; i++) {
    if (count[i] < min_count) {
      min_count = count[i];
      r = i;
    }
  }

  return min_count * value + r;
}

export { findSmallestInteger };
