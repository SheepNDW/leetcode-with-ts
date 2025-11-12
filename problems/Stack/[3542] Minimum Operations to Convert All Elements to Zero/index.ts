function minOperations(nums: number[]): number {
  const stack: number[] = [];
  let res = 0;

  for (const num of nums) {
    while (stack.length && stack[stack.length - 1] > num) {
      stack.pop();
    }

    if (num === 0) continue;

    if (!stack.length || stack[stack.length - 1] < num) {
      res += 1;
      stack.push(num);
    }
  }

  return res;
}

export { minOperations };
