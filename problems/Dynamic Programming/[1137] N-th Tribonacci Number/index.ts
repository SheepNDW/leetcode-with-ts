/*
  memo
*/
function tribonacci0(n: number): number {
  const memo = [0, 1, 1, 2];

  const _helper = (n: number) => {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = _helper(n - 1) + _helper(n - 2) + _helper(n - 3);
    return memo[n];
  };

  return _helper(n);
}

/*
  DP
*/
function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let t0 = 0;
  let t1 = 1;
  let t2 = 1;

  for (let i = 3; i <= n; i++) {
    const ti = t0 + t1 + t2;
    t0 = t1;
    t1 = t2;
    t2 = ti;
  }

  return t2;
}

export { tribonacci };
