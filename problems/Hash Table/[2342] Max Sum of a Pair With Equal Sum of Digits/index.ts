function maximumSum(nums: number[]): number {
  const map = new Array(100).fill(0);

  let maxSum = -1;

  for (const num of nums) {
    const sum = digitSum(num);

    if (!map[sum]) {
      map[sum] = num;
    } else {
      maxSum = Math.max(maxSum, map[sum] + num);
      map[sum] = Math.max(map[sum], num);
    }
  }

  return maxSum;
}

function digitSum(num: number): number {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

export { maximumSum };
