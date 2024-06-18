// brute force (TLE)
function judgeSquareSum0(c: number): boolean {
  for (let a = 0; a * a <= c; a++) {
    for (let b = 0; b * b <= c; b++) {
      if (a * a + b * b === c) return true;
    }
  }

  return false;
}

/*
  hash set
*/
function judgeSquareSum1(c: number): boolean {
  const squareroot = new Set<number>();
  const n = Math.ceil(Math.sqrt(c));

  for (let i = 0; i <= n; i++) {
    squareroot.add(i * i);
  }

  for (let a = 0; a <= n; a++) {
    const diff = c - a * a;
    if (squareroot.has(diff)) {
      return true;
    }
  }

  return false;
}

/*
  two pointer
*/
function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const total = left * left + right * right;
    if (total === c) return true;

    if (total > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

export { judgeSquareSum };
