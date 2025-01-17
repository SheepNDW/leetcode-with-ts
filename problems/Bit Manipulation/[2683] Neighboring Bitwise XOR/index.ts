/*
  simulation
  a ⊕ b = c -> a = b ⊕ c or b = a ⊕ c
*/
function doesValidArrayExist0(derived: number[]): boolean {
  const n = derived.length;

  const canFormOriginal = (initial: number): boolean => {
    const original = Array(n).fill(0);
    original[0] = initial;

    for (let i = 0; i < n - 1; i++) {
      original[i + 1] = derived[i] ^ original[i];
    }

    return (original[n - 1] ^ original[0]) === derived[n - 1];
  };

  return canFormOriginal(0) || canFormOriginal(1);
}

/*
  cumulative XOR
*/
function doesValidArrayExist(derived: number[]): boolean {
  let xor = 0;

  for (const d of derived) {
    xor ^= d;
  }

  return xor === 0;
}

export { doesValidArrayExist };
