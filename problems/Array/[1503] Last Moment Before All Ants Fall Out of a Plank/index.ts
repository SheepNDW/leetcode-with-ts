function getLastMoment(n: number, left: number[], right: number[]): number {
  let lastMoment = 0;

  // Compute the fall off time for ants moving left
  for (const position of left) {
    lastMoment = Math.max(lastMoment, position);
  }
  // Compute the fall off time for ants moving right
  for (const position of right) {
    lastMoment = Math.max(lastMoment, n - position);
  }

  return lastMoment;
}

export { getLastMoment };
