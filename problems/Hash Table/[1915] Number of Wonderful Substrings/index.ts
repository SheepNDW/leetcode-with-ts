/*
  XXXXXj[XXXXi]XX

  state[i]: 0001101010[0]
  state[j] = state[i] ^ (1 << k)
*/
function wonderfulSubstrings(word: string): number {
  const n = word.length;
  let state = 0;
  const count: number[] = Array(1 << 10).fill(0);
  count[0] += 1;

  let result = 0;
  for (let i = 0; i < n; i++) {
    const k = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
    state = state ^ (1 << k); // state[i]
    result += count[state]; // all letters freq are even

    for (let k = 0; k < 10; k++) {
      const stateJ = state ^ (1 << k);
      result += count[stateJ];
    }

    count[state] += 1;
  }

  return result;
}

export { wonderfulSubstrings };
