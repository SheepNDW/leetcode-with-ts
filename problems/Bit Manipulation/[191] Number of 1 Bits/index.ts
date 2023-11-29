// toString and count
function hammingWeight0(n: number): number {
  const str = n.toString(2);

  let count = 0;
  for (const bit of str) {
    if (bit === '1') count++;
  }

  return count;
}

// Unsigned right shift (>>>)
function hammingWeight1(n: number): number {
  let count = 0;
  while (n !== 0) {
    count += n & 1; // 檢查最低位是否為1
    n >>>= 1; // 使用 >>> 來移除已檢查的最低位
  }
  return count;
}

// Brian Kernighan’s Algorithm
function hammingWeight(n: number): number {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count += 1;
  }
  return count;
}

export { hammingWeight };
