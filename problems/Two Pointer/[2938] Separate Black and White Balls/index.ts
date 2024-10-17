function minimumSteps(s: string): number {
  let count = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    if (s[r] === '0') {
      count += r - l;
      l += 1;
    }
  }

  return count;
}

export { minimumSteps };
