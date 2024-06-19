function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  const n = difficulty.length;
  const m = worker.length;

  const jobs: { profit: number; difficulty: number }[] = [];
  for (let i = 0; i < n; i++) {
    jobs.push({ profit: profit[i], difficulty: difficulty[i] });
  }

  jobs.sort((a, b) => a.difficulty - b.difficulty);
  worker.sort((a, b) => a - b);

  let res = 0;
  let left = 0;
  let curMaxProfit = 0;
  for (let i = 0; i < m; i++) {
    const curWorker = worker[i];
    while (left < n && curWorker >= jobs[left].difficulty) {
      curMaxProfit = Math.max(curMaxProfit, jobs[left].profit);
      left++;
    }
    res += curMaxProfit;
  }

  return res;
}

export { maxProfitAssignment };
