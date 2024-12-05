function canChange(start: string, target: string): boolean {
  const n = start.length;
  let i = 0;
  let j = 0;

  while (i < n && j < n) {
    while (start[i] === '_' && i < n) {
      i++;
    }

    while (target[j] === '_' && j < n) {
      j++;
    }

    if (start[i] !== target[j]) {
      return false;
    }

    if (start[i] === 'L' && i < j) {
      return false;
    }

    if (start[i] === 'R' && i > j) {
      return false;
    }

    i++;
    j++;
  }

  while (i < n) {
    if (start[i] !== '_') return false;
    i++;
  }
  while (j < n) {
    if (target[j] !== '_') return false;
    j++;
  }

  return true;
}

export { canChange };
