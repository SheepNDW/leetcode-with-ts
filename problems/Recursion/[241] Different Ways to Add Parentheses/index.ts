const opMap: Record<string, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function diffWaysToCompute(expression: string): number[] {
  const nums: number[] = [];
  const ops: string[] = [];

  let j = 0;
  for (let i = 0; i < expression.length; i++) {
    if (opMap[expression[i]] !== undefined) {
      ops.push(expression[i]);
      nums.push(Number(expression.slice(j, i)));
      j = i + 1;
    }
  }
  nums.push(Number(expression.slice(j)));

  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => Array<number[]>(n + 1));

  const helper = (a: number, b: number): number[] => {
    if (dp[a][b] !== undefined) {
      return dp[a][b];
    }
    if (a === b) {
      return (dp[a][b] = [nums[a]]);
    }

    const res: number[] = [];

    for (let i = a; i < b; i++) {
      const left = helper(a, i);
      const right = helper(i + 1, b);
      const f = opMap[ops[i]];

      for (const x of left) {
        for (const y of right) {
          res.push(f(x, y));
        }
      }
    }

    return (dp[a][b] = res);
  };

  return helper(0, n - 1);
}

export { diffWaysToCompute };
