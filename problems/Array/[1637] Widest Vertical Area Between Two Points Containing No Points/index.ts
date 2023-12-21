function maxWidthOfVerticalArea(points: number[][]): number {
  const xPoints = points.sort((a, b) => a[0] - b[0]).map((p) => p[0]);

  let max = 0;
  for (let i = 1; i < xPoints.length; i++) {
    max = Math.max(max, xPoints[i] - xPoints[i - 1]);
  }

  return max;
}

export { maxWidthOfVerticalArea };
