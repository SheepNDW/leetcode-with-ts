function insert1(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  const result: number[][] = [];
  let i = 0;

  // 將所有在 newInterval 之前的區間加入到結果中
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 更新 newInterval 的邊界，合併所有重疊的區間
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // 將所有在 newInterval 之後的區間加入到結果中
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

// binary search solution
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  let left = 0;
  let right = n - 1;

  // 尋找重疊起始區間
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (intervals[mid][1] < newInterval[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 合併所有重疊區間
  let i = left;
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  return [...intervals.slice(0, left), newInterval, ...intervals.slice(i)];
}

export { insert };
