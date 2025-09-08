/*
  num1 = k(2^i + num2)
  -> num1 - k*num2 = sum_k(2^i)
*/
function makeTheIntegerZero(num1: number, num2: number): number {
  let k = 1;

  while (true) {
    const x = BigInt(num1) - BigInt(k) * BigInt(num2);
    if (x < BigInt(k)) return -1;

    const count = popcount(x);
    if (count <= k) return k;
    k++;
  }
}

function popcount(n: bigint): number {
  let count = 0;

  while (n !== 0n) {
    n &= n - 1n;
    count++;
  }

  return count;
}

export { makeTheIntegerZero };
