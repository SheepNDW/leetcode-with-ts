function minSwaps(s: string): number {
  let count = 0;
  let unmatched = 0;

  for (const ch of s) {
    if (ch === '[') {
      count++;
    } else {
      count--;
    }

    if (count < 0) {
      unmatched++;
      count = 0;
    }
  }

  return Math.floor((unmatched + 1) / 2);
}

export { minSwaps };
