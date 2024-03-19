function findMinArrowShots0(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let shots = 1;
  let curEnd = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= curEnd) {
      curEnd = Math.min(curEnd, points[i][1]);
    } else {
      shots++;
      curEnd = points[i][1];
    }
  }

  return shots;
}

/*
  sort by ending point: tne maximum number of non-overlapping intervals
*/
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let shots = 1;
  let prevEnd = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prevEnd) {
      shots++;
      prevEnd = points[i][1];
    }
  }

  return shots;
}

export { findMinArrowShots };
