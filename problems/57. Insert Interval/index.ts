// 1st version
/* export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const overlaps: number[][] = [];
  const newArray: number[][] = [];

  intervals.forEach((interval) => {
    if (isOverlap(interval, newInterval)) {
      overlaps.push(interval);
    } else {
      newArray.push(interval);
    }
  });

  const overlapsRange = [...overlaps.flat(), ...newInterval].sort((a, b) => a - b);
  const insertInterval = [overlapsRange[0], overlapsRange.at(-1) as number];
  newArray.push(insertInterval);

  return newArray.sort((a, b) => a[1] - b[0]);
} */

// 2nd version
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  let overlaps: number[][] = [];
  let nonOverlaps: number[][] = [];

  for (const interval of intervals) {
    if (isOverlap(interval, newInterval)) {
      overlaps.push(interval);
    } else {
      nonOverlaps.push(interval);
    }
  }

  const mergedOverlap = [...overlaps.flat(), ...newInterval];
  const mergedInterval = [Math.min(...mergedOverlap), Math.max(...mergedOverlap)];

  nonOverlaps = [...nonOverlaps, mergedInterval].sort((a, b) => a[0] - b[0]);

  return nonOverlaps;
}

function isOverlap(interval: number[], newInterval: number[]) {
  const [start, end] = interval;
  const [newStart, newEnd] = newInterval;
  return !(newStart > end || newEnd < start);
}

// expect [[1,5],[6,9]]
// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// );

// expect [[1,2],[3,10],[12,16]]
// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8]
//   )
// );
