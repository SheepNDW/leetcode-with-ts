function findKthBit(n: number, k: number): string {
  const length = 2 ** n - 1;

  function helper(length: number, k: number): string {
    if (length === 1) return '0';

    const half = length >> 1;
    const mid = half + 1;

    if (k === mid) return '1';

    if (k < mid) return helper(half, k);

    return helper(half, 1 + length - k) === '0' ? '1' : '0';
  }

  return helper(length, k);
}

export { findKthBit };
