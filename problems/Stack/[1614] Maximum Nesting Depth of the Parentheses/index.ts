function maxDepth(s: string): number {
  let maxDepth = 0;
  let curDepth = 0;
  for (const c of s) {
    if (c === '(') {
      curDepth++;
      maxDepth = Math.max(maxDepth, curDepth);
    } else if (c === ')') {
      curDepth--;
    }
  }

  return maxDepth;
}

export { maxDepth };
