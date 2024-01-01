function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let count = 0;
  let sIndex = 0;

  for (const child of g) {
    if (child <= s[sIndex]) {
      count++;
      sIndex++;
    }
  }

  return count;
}

export { findContentChildren };
