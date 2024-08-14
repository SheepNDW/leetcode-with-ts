function combinationSum2_(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  const combination: number[] = [];
  const uniqueCandidates: number[] = [];
  const counts: number[] = [];

  // 移除重複值並計算每個值的數量
  for (const candidate of candidates) {
    if (
      uniqueCandidates.length === 0 ||
      candidate !== uniqueCandidates[uniqueCandidates.length - 1]
    ) {
      uniqueCandidates.push(candidate);
      counts.push(1);
    } else {
      counts[counts.length - 1]++;
    }
  }

  const backtrack = (start: number, target: number) => {
    if (target === 0) {
      result.push([...combination]);
      return;
    }
    if (target < 0 || start === uniqueCandidates.length) return;

    // 不使用當前數字
    backtrack(start + 1, target);

    // 使用當前數字，但是根據其數量來限制使用次數
    for (let i = 0; i < counts[start]; i++) {
      combination.push(uniqueCandidates[start]);
      backtrack(start + 1, target - uniqueCandidates[start] * (i + 1));
    }

    // 恢復組合的狀態
    for (let i = 0; i < counts[start]; i++) {
      combination.pop();
    }
  };

  backtrack(0, target);
  return result;
}

/*
  制定規則連著取，要查看目前的 i 跟前一個是不是相等
*/
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const end = candidates.length;
  const res: number[][] = [];
  const comb: number[] = [];

  backtrack(0, 0);
  return res;

  function backtrack(start: number, sum: number) {
    if (sum === target) {
      res.push([...comb]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < end; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      comb.push(candidates[i]);
      backtrack(i + 1, sum + candidates[i]);
      comb.pop();
    }
  }
}

export { combinationSum2 };
