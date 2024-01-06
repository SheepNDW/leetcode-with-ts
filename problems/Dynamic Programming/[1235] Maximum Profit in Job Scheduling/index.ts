interface Job {
  start: number;
  end: number;
  profit: number;
}

// dp[t]: t 時間內最大 profit
// dp[i] = max{dp[i - 1], dp[prevNonOverlap] + profit}
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const n = startTime.length;
  const jobs: Job[] = [];

  for (let i = 0; i < n; i++) {
    const job = {
      start: startTime[i],
      end: endTime[i],
      profit: profit[i],
    };
    jobs.push(job);
  }

  jobs.sort((a, b) => a.end - b.end);

  const dp: number[] = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const prev = biSearch(jobs, i - 1);
    dp[i] = Math.max(dp[i - 1], dp[prev] + jobs[i - 1].profit);
  }

  return dp[n];
}

function biSearch(jobs: Job[], index: number) {
  const currStart = jobs[index].start;
  let left = 0;
  let right = index;

  while (left < right) {
    const mid = (left + right) >> 1;
    const prevEnd = jobs[mid].end;

    if (prevEnd > currStart) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

export { jobScheduling };
