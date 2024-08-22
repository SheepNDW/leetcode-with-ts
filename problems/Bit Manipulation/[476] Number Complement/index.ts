function findComplement0(num: number): number {
  let mask = ~0;
  while (num & mask) {
    mask <<= 1;
  }
  return ~num ^ mask;
}

// alternative
function findComplement(num: number): number {
  const bitLength = Math.floor(Math.log2(num)) + 1;
  return num ^ ((1 << bitLength) - 1);
}

export { findComplement };
