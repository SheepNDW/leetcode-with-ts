/*
  Sorting
*/
function countDays0(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [];
  let start = meetings[0][0];
  let end = meetings[0][1];

  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] > end) {
      merged.push([start, end]);
      start = meetings[i][0];
      end = meetings[i][1];
    } else {
      end = Math.max(end, meetings[i][1]);
    }
  }
  merged.push([start, end]);

  let count = 0;
  for (const [start, end] of merged) {
    count += end - start + 1;
  }

  return days - count;
}

/*
  Diff Array
*/
function countDays(days: number, meetings: number[][]): number {
  const diff = new Map<number, number>();

  for (const [start, end] of meetings) {
    diff.set(start, (diff.get(start) ?? 0) + 1);
    diff.set(end + 1, (diff.get(end + 1) ?? 0) - 1);
  }
  diff.set(days + 1, 1); // 確保最後一段有被正確計算

  const keys = [...diff].sort((a, b) => a[0] - b[0]);
  let count = 0;
  let lastEnd = 1;
  let sum = 0;

  for (const [k, v] of keys) {
    if (sum === 0 && sum + v > 0) {
      count += k - lastEnd;
    } else if (sum > 0 && sum + v === 0) {
      lastEnd = k;
    }
    sum += v;
  }

  return count;
}

export { countDays };
