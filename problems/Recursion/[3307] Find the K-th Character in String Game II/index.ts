function kthCharacter0(k: number, operations: number[]): string {
  let n = 1;
  let count = 0;

  while (n < k) {
    n *= 2;
    count++;
  }

  // (n,k)
  let shift = 0;
  for (let i = count - 1; i >= 0; i--) {
    if (k > n / 2) {
      if (operations[i] === 0) {
        k = k - Math.floor(n / 2);
      } else {
        k = k - Math.floor(n / 2);
        shift++;
      }
    }
    n = Math.floor(n / 2);
  }

  return String.fromCharCode('a'.charCodeAt(0) + (shift % 26));
}

// recursive
function kthCharacter(k: number, operations: number[]): string {
  let n = 1;
  let count = 0;

  while (n < k) {
    n *= 2;
    count++;
  }

  const dfs = (n: number, k: number, step: number): number => {
    if (step < 0) return 0;
    const half = Math.floor(n / 2);

    if (k > half) {
      // 在右半部
      if (operations[step] === 0) {
        return dfs(half, k - half, step - 1);
      }
      return dfs(half, k - half, step - 1) + 1;
    }
    // 在左半部
    return dfs(half, k, step - 1);
  };

  const shift = dfs(n, k, count - 1);

  return String.fromCharCode('a'.charCodeAt(0) + (shift % 26));
}

export { kthCharacter };
