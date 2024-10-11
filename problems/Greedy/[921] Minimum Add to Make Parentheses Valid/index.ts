function minAddToMakeValid(s: string): number {
  let openCount = 0;
  let unbalanced = 0;

  for (const ch of s) {
    if (ch === '(') {
      openCount += 1;
    } else {
      if (openCount > 0) {
        openCount -= 1;
      } else {
        unbalanced += 1;
      }
    }
  }

  return openCount + unbalanced;
}

export { minAddToMakeValid };
