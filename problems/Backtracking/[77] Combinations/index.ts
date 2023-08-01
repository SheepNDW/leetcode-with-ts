function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const candidate: number[] = [];

  const backtrack = (start: number) => {
    if (candidate.length === k) {
      result.push([...candidate]);
      return;
    }

    for (let i = start; i <= n; i++) {
      candidate.push(i); // 將數字 i 加入候選解
      backtrack(i + 1); // 遞迴呼叫下一個數字
      candidate.pop(); // 回溯：移除候選解的最後一個數字
    }
  };

  backtrack(1); // 從 1 開始遞迴
  return result;
}

export { combine };
