/*
  Backtrack
*/
function checkPowersOfThree0(n: number): boolean {
  function backtrack(x: number, sum: number): boolean {
    if (sum === n) return true;
    if (sum > n || 3 ** x > n) return false;

    if (backtrack(x + 1, sum + 3 ** x)) return true;

    return backtrack(x + 1, sum);
  }

  return backtrack(0, 0);
}

/*
  Greedy
*/
function checkPowersOfThree(n: number): boolean {
  // find largest power of 3^x <= n
  let x = 0;
  while (3 ** (x + 1) <= n) {
    x += 1;
  }

  // greedy: remove largest powers
  while (x >= 0) {
    let power = 3 ** x;

    if (power <= n) {
      n -= power;
    }

    x -= 1;
  }

  return n === 0;
}

export { checkPowersOfThree };
