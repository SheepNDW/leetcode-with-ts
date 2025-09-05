function numberOfPairs(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  const n = points.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let lower = Number.MIN_SAFE_INTEGER;
    let upper = points[i][1];

    for (let j = i + 1; j < n; j++) {
      if (points[j][1] > upper) continue;
      if (points[j][1] > lower && points[j][1] <= upper) {
        count++;
      }
      lower = Math.max(lower, points[j][1]);
    }
  }

  return count;
}

export { numberOfPairs };
