/*
  Monotonic Increasing Stack
*/
function maxChunksToSorted0(arr: number[]): number {
  const stack: number[] = [];

  for (const num of arr) {
    if (stack.length === 0 || num > stack[stack.length - 1]) {
      stack.push(num);
    } else {
      const max = stack[stack.length - 1];

      while (stack.length > 0 && num < stack[stack.length - 1]) {
        stack.pop();
      }

      stack.push(max);
    }
  }

  return stack.length;
}

/*
  Maximum Element
*/
function maxChunksToSorted(arr: number[]): number {
  const n = arr.length;
  let chunks = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i]);

    if (max === i) {
      chunks++;
    }
  }

  return chunks;
}

export { maxChunksToSorted };
