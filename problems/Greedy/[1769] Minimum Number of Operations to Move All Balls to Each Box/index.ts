// BRUTE FORCE
function minOperations1(boxes: string): number[] {
  const n = boxes.length;
  const res: number[] = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (boxes[j] === '1') {
        count += Math.abs(i - j);
      }
    }

    res[i] = count;
  }

  return res;
}

/*
  O(n) solution

  leftMoves[i] = leftMoves[i-1] + left[i]*1
  rightMoves[i] = rightMoves[i+1] + right[i] * 1
  res[i] = leftMoves[i] + rightMoves[i]
*/
function minOperations(boxes: string): number[] {
  const n = boxes.length;
  const leftMoves: number[] = Array(n).fill(0);
  const rightMoves: number[] = Array(n).fill(0);

  let left = 0;
  for (let i = 1; i < n; i++) {
    left += +boxes[i - 1];
    leftMoves[i] = leftMoves[i - 1] + left;
  }

  let right = 0;
  for (let i = n - 2; i >= 0; i--) {
    right += +boxes[i + 1];
    rightMoves[i] = rightMoves[i + 1] + right;
  }

  const res: number[] = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    res[i] = leftMoves[i] + rightMoves[i];
  }

  return res;
}

export { minOperations };
