// brute force (TLE)
function numFactoredBinaryTrees0(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const mod = 1e9 + 7;
  const valueSet = new Set(arr);

  const countTrees = (currentValue: number, arr: number[]): number => {
    let count = 1;
    for (const num of arr) {
      if (num > currentValue) break;
      if (currentValue % num === 0 && valueSet.has(currentValue / num)) {
        count += countTrees(num, arr) * countTrees(currentValue / num, arr);
      }
    }
    return count % mod;
  };

  return arr.reduce((count, currNum) => {
    return (count += countTrees(currNum, arr)) % mod;
  }, 0);
}

// recursive + memoization
function numFactoredBinaryTrees1(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const mod = 1e9 + 7;
  const valueSet = new Set(arr);
  const cache = new Map<number, number>();

  const countTrees = (currentValue: number, arr: number[]): number => {
    if (cache.has(currentValue)) {
      return cache.get(currentValue) as number;
    }

    let count = 1;
    for (const num of arr) {
      if (num > currentValue) break;
      if (currentValue % num === 0 && valueSet.has(currentValue / num)) {
        count += countTrees(num, arr) * countTrees(currentValue / num, arr);
      }
    }

    cache.set(currentValue, count % mod);
    return cache.get(currentValue) as number;
  };

  return arr.reduce((count, curr) => {
    return (count += countTrees(curr, arr)) % mod;
  }, 0);
}

// DP
// dp[i] 以 arr[i] 為 root 的二元樹數量。 arr[i] 可以拆成 arr[j] * arr[k] (j < k)
function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const mod = 1e9 + 7;
  const n = arr.length;
  const dp: number[] = new Array(n).fill(1);

  const index = new Map<number, number>();
  arr.forEach((num, i) => index.set(num, i));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        const k = index.get(arr[i] / arr[j]);
        if (k !== undefined) {
          dp[i] = (dp[i] + dp[j] * dp[k]) % mod;
        }
      }
    }
  }

  return dp.reduce((sum, count) => (sum + count) % mod, 0);
}

export { numFactoredBinaryTrees };
