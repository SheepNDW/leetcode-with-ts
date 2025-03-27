function checkValidCuts(n: number, rectangles: number[][]): boolean {
  const xIntervals: number[][] = [];
  const yIntervals: number[][] = [];

  for (const [x1, y1, x2, y2] of rectangles) {
    xIntervals.push([x1, x2]);
    yIntervals.push([y1, y2]);
  }

  xIntervals.sort((a, b) => a[0] - b[0]);
  yIntervals.sort((a, b) => a[0] - b[0]);

  return check(xIntervals) || check(yIntervals);
}

function check(intervals: number[][]): boolean {
  let count = 0;
  let prevEnd = 0;

  for (const [start, end] of intervals) {
    if (start >= prevEnd) {
      count++;
      if (count >= 3) return true;
    }
    prevEnd = Math.max(prevEnd, end);
  }

  return false;
}

export { checkValidCuts };
