function productQueries(n: number, queries: number[][]): number[] {
  const M = 1e9 + 7;
  const exp: number[] = [];

  for (let i = 0; i < 31; i++) {
    if (n % 2 !== 0) {
      exp.push(i);
    }
    n >>= 1;
    if (n === 0) break;
  }

  const presum = Array(exp.length).fill(0);
  presum[0] = exp[0];
  for (let i = 1; i < exp.length; i++) {
    presum[i] = presum[i - 1] + exp[i];
  }

  const maxExp = presum[presum.length - 1];
  const powerOfTwo = new Array(maxExp + 1).fill(1);
  for (let i = 1; i <= maxExp; i++) {
    powerOfTwo[i] = (powerOfTwo[i - 1] * 2) % M;
  }

  const res: number[] = [];

  for (const [l, r] of queries) {
    const sum = presum[r] - (l === 0 ? 0 : presum[l - 1]);
    res.push(powerOfTwo[sum]);
  }

  return res;
}

export { productQueries };
