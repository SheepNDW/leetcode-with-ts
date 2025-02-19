function smallestNumber(pattern: string): string {
  pattern = 'I' + pattern;
  const n = pattern.length;

  let max = 0;
  const arr: number[] = [];

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n && pattern[j] === 'D') {
      j++;
    }
    const count = j - i;

    for (let k = max + count; k >= max + 1; k--) {
      arr.push(k);
    }

    max = max + count;
    i = j - 1;
  }

  return arr.join('');
}

export { smallestNumber };
