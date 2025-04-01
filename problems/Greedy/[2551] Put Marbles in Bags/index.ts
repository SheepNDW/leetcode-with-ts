/*
  [X X | X X X | X X X | X X]
*/
function putMarbles(weights: number[], k: number): number {
  const n = weights.length;

  const adjacent: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    adjacent.push(weights[i] + weights[i + 1]);
  }

  adjacent.sort((a, b) => a - b);

  let res = 0;

  for (let i = 0; i < k - 1; i++) {
    res += adjacent[adjacent.length - 1 - i];
  }
  for (let i = 0; i < k - 1; i++) {
    res -= adjacent[i];
  }

  return res;
}

export { putMarbles };
