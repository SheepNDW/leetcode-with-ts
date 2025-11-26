/*
  this solution may overflow for large numbers
*/
function smallestRepunitDivByK0(k: number): number {
  if (k % 2 === 0 || k % 5 === 0) return -1;

  let len = 1;
  let n = 1;

  while (n % k !== 0) {
    n = n * 10 + 1;
    len += 1;
  }

  return len;
}

/*
  optimized solution using modular arithmetic

  n1 = k*q + r1
  n2 = 10*n1+1 = k*10q + 10r1 + 1 = 10r1 + 1 = r2 (mod k)
  n3 = 10*n2+1 = 10r2 + 1 = r3 (mod k)
*/
function smallestRepunitDivByK(k: number): number {
  if (k % 2 === 0 || k % 5 === 0) return -1;

  let len = 1;
  let r = 1 % k;

  while (r !== 0) {
    r = (r * 10 + 1) % k;
    len += 1;
  }

  return len;
}

export { smallestRepunitDivByK };
