/*
  sort by ending points: maximum number of non-overlapping intervals
*/
function intersectionSizeTwo(intervals: number[][]): number {
  intervals.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]));

  let count = 2;
  let a = intervals[0][1] - 1;
  let b = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start <= a) continue;

    if (start <= b) {
      a = b;
      b = end;
      count += 1;
    } else {
      count += 2;
      a = end - 1;
      b = end;
    }
  }

  return count;
}

export { intersectionSizeTwo };
