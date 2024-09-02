/*
  prefix + binary search
*/
function chalkReplacer(chalk: number[], k: number): number {
  const n = chalk.length;
  const pre: number[] = new Array(n).fill(0);
  pre[0] = chalk[0];

  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + chalk[i];
  }

  const remain = k % pre[n - 1];
  let l = 0;
  let r = n - 1;

  while (l < r) {
    const mid = (l + r) >> 1;

    if (pre[mid] > remain) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

export { chalkReplacer };
