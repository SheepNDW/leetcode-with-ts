/*
  recursive
*/
function isPowerOfTwo0(n: number): boolean {
  if (n === 1) return true;
  if (n <= 0) return false;
  if (n % 2 === 0) {
    return isPowerOfTwo(n / 2);
  }
  return false;
}

/*
  Math.log
*/
function isPowerOfTwo1(n: number): boolean {
  return Math.log2(n) % 1 === 0;
}

/*
  bit 
*/
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;
  if (n & (n - 1)) return false;
  return true;
}

export { isPowerOfTwo };
